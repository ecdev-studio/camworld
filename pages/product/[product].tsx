import Layout from '../../components/Layout/Layout'
import iconCart from '../../public/images/ic_cart_product.svg'
import {ICategory, IProduct} from '../../types/data-types'
import {NextPage, NextPageContext} from 'next'
import { FetchQuery, FetchQueryWithProps } from '../../hook/fetch-hooks'
import { getCategoryQuery, getProductBySlug } from '../../GraphQL/Schemas'

type PageProps = {
	menuArray: Array<ICategory>
	productData: IProduct
}

const Product: NextPage<PageProps> = ({ menuArray, productData }) => {

	return (
		<Layout menuArray={menuArray}>
			<h1>{productData.name}</h1>
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