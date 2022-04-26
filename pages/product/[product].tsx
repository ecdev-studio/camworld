import Layout from '../../components/Layout/Layout'
import {ICategory, IProduct} from '../../types/data-types'
import {GetStaticPropsContext, NextPage} from 'next'
import {FetchQuery, FetchQueryWithProps} from '../../hook/fetch-hooks'
import {getCategoryQuery, getProductBySlug, getProductsFilter} from '../../GraphQL/Schemas'
import Head from "next/head";
import styles from '../../components/ProductPage/ProductPage_.module.scss'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductContent from "../../components/ProductPage/ProductContent";
import React from "react";

type PageProps = {
	menuArray: Array<ICategory>
	productData: IProduct
}

const Product: NextPage<PageProps> = ({menuArray, productData}) => {
	return (
		<Layout menuArray={menuArray}>
			<Head>
				<title>{productData.name}</title>
			</Head>
			<section className={styles.product}>
				<div className={styles.product__inner}>
					<BreadCrumbs name={productData.name}/>
					<ProductContent product={productData}/>
				</div>
			</section>
		</Layout>
	)
}

export async function getStaticProps({params}: GetStaticPropsContext<{ product: string }>) {
	const menuData = await FetchQuery(getCategoryQuery)
	// @ts-ignore
	const productDataQuery = await FetchQueryWithProps(getProductBySlug, {slug: params.product})

	return {
		props: {
			menuArray: menuData.data.getCategories,
			productData: productDataQuery.data.getProductBySlug
		}
	}
}

export async function getStaticPaths() {
	const products = await FetchQueryWithProps(getProductsFilter, {})
	const paths = products.data.getProducts.rows.map((product: IProduct) => ({
		params: {product: product.slug},
	}));
	return {paths, fallback: false}
}

export default Product