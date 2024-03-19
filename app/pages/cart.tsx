import type {NextPage} from 'next'
import Layout from "../components/Layout/Layout";
import {FetchQuery} from "../hook/fetch-hooks";
import {getCategoryQuery} from "../GraphQL/Schemas";
import {ICategory} from "../types/data-types";
import Head from 'next/head';
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import styles from '../components/CartPage/CartPage_.module.scss'
import CartContent from "../components/CartPage/CartContent";

type PageProps = {
	menuArray: Array<ICategory>
}

const Cart: NextPage<PageProps> = (props) => {
	return (
		<Layout menuArray={props.menuArray}>
			<Head>
				<title>Cart</title>
				<meta name="robots" content="noindex"/>
			</Head>
			<section className={styles.cart}>
				<div className={styles.cart__inner}>
					<BreadCrumbs name={'Shopping Cart'} />
					<h1 className={styles.cart__title}>Shopping Cart</h1>
					<CartContent />
				</div>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const menuArray = await FetchQuery(getCategoryQuery)

	return {
		props: {
			menuArray: menuArray.data.getCategories,
		}
	}
}

export default Cart