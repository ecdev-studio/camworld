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
import {useEffect, useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {useTypedSelector} from "../hook/useTypedSelector";
import {store} from "../store";
import {changeFilter, toggleMenu} from "../store/action-creator/global-action-creator";


type PageProps = {
	menuArray: Array<ICategory>
	products: {
		rows: Array<IProduct>
		count: number
	}
	categories: Array<ICategory>,
	maxAndMinPrice: {
		min: number,
		max: number
	}
	currentCategory: ICategory
}
const paginationLimit = 9
const Category: NextPage<PageProps> = (
	{menuArray, products, categories, maxAndMinPrice, currentCategory}) => {
	const [prod, setProd] = useState(products.rows);
	const [getProducts, {data: dataSort, loading: dataLoading, error: dataError}] = useLazyQuery(getProductsFilter);
	const filter = useTypedSelector(state => state.filter);

	console.log(maxAndMinPrice);
	console.log(categories);

	useEffect(() => {
		store.dispatch(changeFilter({ priceMin: maxAndMinPrice.min }))
	}, [])

	useEffect(() => {
		// getProducts().then()
	}, [getProducts])

	useEffect(() => {
		if (dataSort && !dataLoading) {
			console.log(dataSort.getProducts.rows);
		}
	}, [dataSort, dataLoading, dataError])

	return (
		<Layout menuArray={menuArray}>
			<section className={styles.section}>
				<div className={styles.inner}>
					<CategoryTop name={currentCategory.name}/>
					<div className={styles.content}>
						<CategoryFilter maxPrice={maxAndMinPrice.max} minPrice={maxAndMinPrice.min} />
						<CategoryProducts products={prod}/>
						<Pagination limit={paginationLimit} count={products.count}/>
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
	const currentCategory: ICategory = menuArray.find((x: ICategory) => x.name.toLowerCase() === params.category)
	const products = await FetchQueryWithProps(getProductsPrerender, {
		categoryId: currentCategory.id,
		limit: paginationLimit
	})
	return {
		props: {
			menuArray: menuArray,
			products: products.data.getProducts,
			categories: products.data.getCategory,
			maxAndMinPrice: products.data.getMaxMinPrice,
			currentCategory: currentCategory
		}
	}
}

export async function getStaticPaths() {
	const menuArray = await FetchQuery(getCategoryQuery)
	const paths = menuArray.data.getCategories.map((category: ICategory) => ({
		params: {category: category.name.toLowerCase()},
	}));
	return {paths, fallback: false}
}

export default Category