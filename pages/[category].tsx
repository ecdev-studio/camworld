import type {GetStaticPropsContext, NextPage} from 'next'
import Layout from "../components/Layout/Layout";
import {ICategory, IProduct} from "../types/data-types";
import {FetchQuery, FetchQueryWithProps} from "../hook/fetch-hooks";
import {getCategoryQuery, getProductsPrerender} from "../GraphQL/Schemas"
import styles from '../components/CategoryPage/CategoryPage_.module.scss'
import CategoryTop from "../components/CategoryPage/CategoryTop";
import CategoryFilter from "../components/CategoryPage/CategoryFilter";
import CategoryProducts from "../components/CategoryPage/CategoryProducts";
type PageProps = {
    menuArray: Array<ICategory>
    products: Array<IProduct>
    currentCategory:ICategory
}
const Category: NextPage<PageProps> = (props) => {
    console.log(props)
    return (
        <Layout menuArray={props.menuArray}>
            <section className={styles.section}>
                <div className={styles.inner}>
                    <CategoryTop name={props.currentCategory.name}/>
                    <CategoryFilter/>
                    <CategoryProducts/>
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
        limit: 9
    })
    return {
        props: {
            menuArray: menuArray,
            products: products.data.getProducts.rows,
            currentCategory:currentCategory
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