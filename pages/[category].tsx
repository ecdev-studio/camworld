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
	const [prod, setProd] = useState(products.rows);
	const [count, setCount] = useState(products.count);
	const [getProducts, {data: dataSort, loading: dataLoading, error: dataError}] = useLazyQuery(getProductsFilter);
	const filter = useTypedSelector(state => state.filter);

	useEffect(() => {
		const backendQuery = async () => {
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
		backendQuery().then()
	}, [getProducts, filter, currentCategory])

	useEffect(() => {
		if (dataSort && !dataLoading) {
			setProd(dataSort.getProducts.rows)
			setCount(dataSort.getProducts.count)
			window.scrollTo({top: 0, behavior: 'smooth'});
		}
	}, [dataSort, dataLoading, dataError])

	return (
		<Layout menuArray={menuArray}>
			<section className={styles.section}>
				<div className={styles.inner}>
					<CategoryTop name={currentCategory.name}/>
					<div className={styles.content}>
						<CategoryFilter maxPrice={maxAndMinPrice.max} minPrice={maxAndMinPrice.min} category={category} />
						<CategoryProducts products={prod}/>
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
	const currentCategory: ICategory = menuArray.find((x: ICategory) => x.name.toLowerCase() === params.category)
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