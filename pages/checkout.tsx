import type {NextPage} from 'next'
import Layout from "../components/Layout/Layout";
import {FetchQuery} from "../hook/fetch-hooks";
import {getCategoryQuery} from "../GraphQL/Schemas";
import {ICategory} from "../types/data-types";
import Head from 'next/head';
import styles from '../components/CheckoutPage/CheckoutPage_.module.scss'
import CheckoutSteps from "../components/CheckoutPage/CheckoutSteps";
import {useState} from "react";

type PageProps = {
	menuArray: Array<ICategory>
}

const Checkout: NextPage<PageProps> = (props) => {
	const [step, setStep] = useState('shipping');

	const changeStep = (value: string) => {
		setStep(value)
	}

	return (
		<Layout menuArray={props.menuArray}>
			<Head>
				<title>Checkout</title>
			</Head>
			<section className={styles.checkout}>
				<CheckoutSteps step={step} changeStep={changeStep} />
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

export default Checkout