import type {NextPage, NextPageContext} from 'next'
import Layout from "../components/Layout/Layout";
import {ICategory} from "../types/data-types";
import {useFetchMenu} from "../hook/fetch-hooks";

type PageProps={
    menuArray:Array<ICategory>
}
const Home: NextPage<PageProps> =  (props) => {

  return (
    <Layout menuArray={props.menuArray}>

    </Layout>
  )
}

export async function getStaticProps() {
  const menuArray=await useFetchMenu()
  return {
    props:{
      menuArray:menuArray.data.getCategories
    }
  }
}

export default Home