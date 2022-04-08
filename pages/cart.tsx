import type {NextPage} from 'next'
import Layout from "../components/Layout/Layout";
import {FetchQuery} from "../hook/fetch-hooks";
import {getCategoryQuery} from "../GraphQL/Schemas";
import {ICategory} from "../types/data-types";

type PageProps = {
    menuArray: Array<ICategory>
}
const Cart: NextPage<PageProps> = (props) => {
    return (
        <Layout menuArray={props.menuArray}>

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