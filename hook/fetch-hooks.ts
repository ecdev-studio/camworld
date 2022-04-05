import {gql} from "@apollo/client";
import {initializeApollo} from "../apollo/apolloClient";

const getCategoryMutation=gql`
    query  {
        getCategories {
            id
            name
            slug
        }
    }`

export const useFetchMenu=async ()=>{
  const apolloClient=initializeApollo()
  return await apolloClient.query({query:getCategoryMutation})
}