import type {NextPage, NextPageContext} from 'next'
import Layout from "../components/Layout/Layout";
import {ICategory, IProduct} from "../types/data-types";
import Banner from "../components/HomePage/Banner/Banner";
import CameraReview from "../components/HomePage/CameraReview/CameraReview";
import IncridibleShots from "../components/HomePage/IncridibleShots/IncridibleShots";
import BestSellers from "../components/HomePage/BestSellers/BestSellers";
import FeaturedProducts from "../components/HomePage/FeaturedProducts/FeaturedProducts";
import {useFetchQuery} from "../hook/fetch-hooks";
import {getCategoryQuery, getProductHomePageQuery} from "../GraphQL/Schemas"
type PageProps = {
  menuArray: Array<ICategory>
  products:Array<IProduct>
}
const Home: NextPage<PageProps> = (props) => {

  return (
    <Layout menuArray={props.menuArray}>
      <Banner/>
      <FeaturedProducts products={props.products}/>
      <CameraReview/>
      <IncridibleShots/>
      <BestSellers/>
    </Layout>
  )
}

export async function getStaticProps() {
  const menuArray = await useFetchQuery(getCategoryQuery)
  const products=await useFetchQuery(getProductHomePageQuery)
  return {
    props: {
      menuArray: menuArray.data.getCategories,
      products:products.data.getProducts.rows
    }
  }
}

export default Home