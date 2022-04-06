import type {NextPage, NextPageContext} from 'next'
import Layout from "../components/Layout/Layout";
import {ICategory} from "../types/data-types";
import {useFetchMenu} from "../hook/fetch-hooks";
import Banner from "../components/HomePage/Banner/Banner";
import CameraReview from "../components/HomePage/CameraReview/CameraReview";

type PageProps = {
  menuArray: Array<ICategory>
}
const Home: NextPage<PageProps> = (props) => {

  return (
    <Layout menuArray={props.menuArray}>
      <Banner/>
      <CameraReview/>
    </Layout>
  )
}

export async function getStaticProps() {
  const menuArray = await useFetchMenu()
  return {
    props: {
      menuArray: menuArray.data.getCategories
    }
  }
}

export default Home