import {DocumentNode, OperationVariables, TypedDocumentNode} from "@apollo/client";
import {initializeApollo} from "../apollo/apolloClient";


export const FetchQuery = async (query: DocumentNode | TypedDocumentNode<any, OperationVariables>) => {
  const apolloClient = initializeApollo()
  return await apolloClient.query({query: query})
}
export const FetchQueryWithProps = async (query: DocumentNode | TypedDocumentNode<any,
    OperationVariables>,variables:any) => {
  const apolloClient = initializeApollo()
  return await apolloClient.query({query: query,variables:variables})
}

