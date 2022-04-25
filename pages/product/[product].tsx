import Layout from '../../components/Layout/Layout'
import {ICategory, IProduct} from '../../types/data-types'
import {NextPage, NextPageContext} from 'next'
import { FetchQuery, FetchQueryWithProps } from '../../hook/fetch-hooks'
import { getCategoryQuery, getProductBySlug } from '../../GraphQL/Schemas'
import Head from "next/head";
import styles from '../../components/ProductPage/ProductPage_.module.scss'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductContent from "../../components/ProductPage/ProductContent";
import iconCart from '../../public/images/ic_cart_white.svg'
import iconShipping from '../../public/images/ic_shipping.svg'
import Information from "../../components/ProductPage/Information";
import Image from "next/image";
import React from "react";

type PageProps = {
	menuArray: Array<ICategory>
	productData: IProduct
}

const Product: NextPage<PageProps> = ({ menuArray, productData }) => {

	const addToCartHandler = () => {

	}

	return (
		<Layout menuArray={menuArray}>
			<Head>
				<title>{productData.name}</title>
			</Head>
			<section className={styles.product}>
				<div className={styles.product__inner}>
					<BreadCrumbs name={productData.name} />
					<ProductContent product={productData} />
					<div className={styles.product__content__left__mobile}>
						<Information product={productData} />
						<button onClick={addToCartHandler} className={styles.product__add_to_cart}>
							<Image
								className={styles.product__add_to_cart__icon}
								src={iconCart}
								width={20}
								height={18}
								alt={'icon cart'}
							/>
							Add to cart
						</button>
						<div className={styles.product__shipping}>
							<Image
								className={styles.product__shipping__icon}
								src={iconShipping}
								width={21}
								height={13}
								alt={'icon shipping'}
							/>
							<span className={styles.product__shipping__text}>FREE SHIPPING Available</span>
						</div>
					</div>
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