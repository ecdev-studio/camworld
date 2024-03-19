import type {GetStaticPropsContext, NextPage} from 'next'
import Layout from "../components/Layout/Layout";
import {ICategory, IProduct} from "../types/data-types";
import {FetchQuery, FetchQueryWithProps} from "../hook/fetch-hooks";
import {getCategoryQuery, getProductsFilter, getProductsPrerender} from "../GraphQL/Schemas"
import styles from '../components/CategoryPage/CategoryPage_.module.scss'
import CategoryTop from "../components/CategoryPage/CategoryTop";
import CategoryFilter from "../components/CategoryPage/CategoryFilter";
import CategoryProducts from "../components/CategoryPage/CategoryProducts";
import Pagination from "../components/CategoryPage/Pagination";
import React, {useEffect, useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {useTypedSelector} from "../hook/useTypedSelector";
import Head from "next/head";


type PageProps = {
	menuArray: Array<ICategory>
	products: {
		rows: Array<IProduct>
		count: number
	}
	category: ICategory,
	maxAndMinPrice: {
		min: number,
		max: number
	}
	currentCategory: ICategory
}
const paginationLimit = 9
const Category: NextPage<PageProps> = (
	{menuArray, products, category, maxAndMinPrice, currentCategory}) => {
	const [prod, setProd] = useState<Array<IProduct>>(products.rows);
	const [loader, setLoader] = useState(false);
	const [update, setUpdate] = useState(false);
	const [count, setCount] = useState(products.count);
	const [getProducts, {data: dataSort, loading: dataLoading, error: dataError}] = useLazyQuery(getProductsFilter);
	const filter = useTypedSelector(state => state.filter);

	useEffect(() => {
		const backendQuery = async () => {
			if (update) {
				return await getProducts({
					variables: {
						categoryId: currentCategory.id,
						sort: {
							sortBy: filter.sortBy,
							priceMin: filter.priceMin,
							priceMax: filter.priceMax,
						},
						subTaxonomy: filter.subTaxonomy,
						offset: filter.limit * (filter.page - 1),
						limit: filter.limit
					},
				})
			}
		}
		backendQuery().then()
	}, [filter])

	useEffect(() => {
		setProd(products.rows)
	}, [products.rows, setProd]);

	useEffect(() => {
		setUpdate(true)
		return () => {
			setUpdate(false)
		}
	}, []);

	useEffect(() => {
		if (dataSort && !dataLoading) {
			setLoader(true)
			setProd(dataSort.getProducts.rows)
			setCount(dataSort.getProducts.count)
			window.scrollTo({top: 0, behavior: 'smooth'});

			setTimeout(()=> {
				setLoader(false)
			}, 1000)
		}
	}, [dataSort, dataLoading, dataError, setLoader])

	return (
		<Layout menuArray={menuArray}>
			<Head>
				<title>{currentCategory.name}</title>
				<meta name="robots" content="noindex"/>
			</Head>
			<section className={styles.section}>
				<div className={styles.inner}>
					<CategoryTop name={currentCategory.name}/>
					<div className={styles.content}>
						<CategoryFilter maxPrice={maxAndMinPrice.max} minPrice={maxAndMinPrice.min} category={category} />
						<CategoryProducts loader={loader} products={prod}/>
						<Pagination limit={paginationLimit} count={count}/>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export async function getStaticProps({params}: GetStaticPropsContext<{ category: string }>) {
	const menuData = await FetchQuery(getCategoryQuery)
	const menuArray = menuData.data.getCategories
	// @ts-ignore
	const currentCategory: ICategory = menuArray.find((x: ICategory) => x.slug === params.category)
	const products = await FetchQueryWithProps(getProductsPrerender, {
		categoryId: currentCategory.id,
		limit: paginationLimit
	})
	return {
		props: {
			menuArray: menuArray,
			products: products.data.getProducts,
			category: products.data.getCategory,
			maxAndMinPrice: products.data.getMaxMinPrice,
			currentCategory: currentCategory
		}
	}
}

export async function getStaticPaths() {
	const menuArray = await FetchQuery(getCategoryQuery)
	const paths = menuArray.data.getCategories.map((category: ICategory) => ({
		params: {category: category.slug},
	}));
	return {paths, fallback: false}
}

export default Category