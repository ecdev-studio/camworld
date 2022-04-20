import type {NextPage} from 'next'
import Layout from "../components/Layout/Layout";
import {FetchQuery} from "../hook/fetch-hooks";
import {getCategoryQuery} from "../GraphQL/Schemas";
import {ICategory} from "../types/data-types";
import Head from 'next/head';
import CheckoutSteps from "../components/CheckoutPage/CheckoutSteps";
import {useState} from "react";
import ShippingStep from "../components/CheckoutPage/ShippingStep";

type PageProps = {
	menuArray: Array<ICategory>
}

interface IShipping {
	address: string,
	city: string,
	postalCode: string,
	country: string,
}

const Checkout: NextPage<PageProps> = (props) => {
	const [step, setStep] = useState('shipping');
	const [shipping, setShipping] = useState<IShipping>({
		address: '',
		city: '',
		postalCode: '',
		country: '',
	});

	const changeStep = (value: string) => {
		setStep(value);
	}

	return (
		<Layout menuArray={props.menuArray}>
			<Head>
				<title>Checkout</title>
			</Head>
			<section>
				<CheckoutSteps step={step} changeStep={changeStep} />
				<ShippingStep shipping={shipping} setShipping={setShipping} changeStep={changeStep} />
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