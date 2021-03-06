import type {NextPage} from 'next'
import Layout from "../components/Layout/Layout";
import {ICategory, IProduct} from "../types/data-types";
import Banner from "../components/HomePage/Banner/Banner";
import CameraReview from "../components/HomePage/CameraReview/CameraReview";
import IncridibleShots from "../components/HomePage/IncridibleShots/IncridibleShots";
import BestSellers from "../components/HomePage/BestSellers/BestSellers";
import FeaturedProducts from "../components/HomePage/FeaturedProducts/FeaturedProducts";
import {FetchQuery} from "../hook/fetch-hooks";
import {getCategoryQuery, getProductHomePageQuery} from "../GraphQL/Schemas"
import Head from "next/head";

type PageProps = {
  menuArray: Array<ICategory>
  products:Array<IProduct>
}
const Home: NextPage<PageProps> = (props) => {

  return (
    <Layout menuArray={props.menuArray}>
      <Head>
        <title>CamWorld</title>
        <meta name="robots" content="noindex"/>
      </Head>
      <Banner/>
      <FeaturedProducts products={props.products}/>
      <CameraReview/>
      <IncridibleShots/>
      <BestSellers/>
    </Layout>
  )
}

export async function getStaticProps() {
  const menuArray = await FetchQuery(getCategoryQuery)
  const products=await FetchQuery(getProductHomePageQuery)
  return {
    props: {
      menuArray: menuArray.data.getCategories,
      products:products.data.getProducts.rows
    }
  }
}

export default Home
