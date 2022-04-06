import {gql} from "@apollo/client";
import {initializeApollo} from "../apollo/apolloClient";

const getCategoryQuery = gql`
    query  {
        getCategories {
            id
            name
            slug
        }
    }`
const getProductHomePageQuery = gql`
    query {
        getProducts(limit:4) {
            rows {
                id
                name
                image
                price
                rating
                numReviews
                slug
            }
        }
    }`

export const useFetchMenu = async () => {
  const apolloClient = initializeApollo()
  return await apolloClient.query({query: getCategoryQuery})
}

export const useFetchHomeProducts=async ()=>{
    const apolloClient = initializeApollo()
    return await apolloClient.query({query: getProductHomePageQuery})
}