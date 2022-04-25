import Layout from '../../components/Layout/Layout'
import {ICategory, IProduct} from '../../types/data-types'
import {NextPage, NextPageContext} from 'next'
import { FetchQuery, FetchQueryWithProps } from '../../hook/fetch-hooks'
import { getCategoryQuery, getProductBySlug } from '../../GraphQL/Schemas'
import Head from "next/head";
import styles from '../../components/ProductPage/ProductPage_.module.scss'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductContent from "../../components/ProductPage/ProductContent";
import React from "react";

type PageProps = {
	menuArray: Array<ICategory>
	productData: IProduct
}

const Product: NextPage<PageProps> = ({ menuArray, productData }) => {
	return (
		<Layout menuArray={menuArray}>
			<Head>
				<title>{productData.name}</title>
			</Head>
			<section className={styles.product}>
				<div className={styles.product__inner}>
					<BreadCrumbs name={productData.name} />
					<ProductContent product={productData} />
				</div>
			</section>
		</Layout>
	)
}

export async function getServerSideProps (context: NextPageContext) {
	const menuData = await FetchQuery(getCategoryQuery)
	const productDataQuery = await FetchQueryWithProps(getProductBySlug, {
		slug: context.query.product
	})

	return {
		props: {
			menuArray: menuData.data.getCategories,
			productData: productDataQuery.data.getProductBySlug
		}
	}
}

export default Product