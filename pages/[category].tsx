import type {GetStaticPropsContext, NextPage} from 'next'
import Layout from "../components/Layout/Layout";
import {ICategory, IProduct} from "../types/data-types";
import {FetchQuery, FetchQueryWithProps} from "../hook/fetch-hooks";
import {getCategoryQuery, getProductsPrerender} from "../GraphQL/Schemas"
import styles from '../components/CategoryPage/CategoryPage_.module.scss'
import CategoryTop from "../components/CategoryPage/CategoryTop";
import CategoryFilter from "../components/CategoryPage/CategoryFilter";
import CategoryProducts from "../components/CategoryPage/CategoryProducts";
import Pagination from "../components/CategoryPage/Pagination";


type PageProps = {
    menuArray: Array<ICategory>
    products: {
        rows: Array<IProduct>
        count: number
    }
    categories: Array<ICategory>,
    maxAndMinPrice: {
        min: number,
        max: number
    }
    currentCategory: ICategory
}
const paginationLimit = 9
const Category: NextPage<PageProps> = (
    {menuArray, products, categories,maxAndMinPrice,currentCategory}) => {


    return (
        <Layout menuArray={menuArray}>
            <section className={styles.section}>
                <div className={styles.inner}>
                    <CategoryTop name={currentCategory.name}/>
                    <div className={styles.content}>
                        <CategoryFilter/>
                        <CategoryProducts/>
                        <Pagination limit={paginationLimit} count={products.count}/>
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
            categories: products.data.getCategory,
            maxAndMinPrice: products.data.getMaxMinPrice,
            currentCategory: currentCategory
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