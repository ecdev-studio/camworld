import {gql} from "@apollo/client";

/*
* all pages
*/
export const getCategoryQuery = gql`
    query  { getCategories {
            id
            name
            slug
        }
    }
`


/*
* home page
*/
export const getProductHomePageQuery = gql`
    query { getProducts(limit:4) {
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
    }
`