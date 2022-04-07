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
/*
* Category pages
 */
export const getProductsPrerender = gql`
    query getProductsAndGetCategory($categoryId:Int!, $limit:Int) {
            getProducts(categoryId:$categoryId,limit:$limit) {
                rows {
                    id
                    name
                    image
                    price
                    rating
                    numReviews
                    slug
                    category {
                        name
                        slug
                    }
                }
                count
            },
            getCategory(id:$categoryId) {
                taxonomies {
                    name
                    id
                    subTaxonomies {
                        taxonomyId
                        name
                        id
                    }
                }
                id
                name
                slug
            },
            getMaxMinPrice(categoryId: $categoryId) {
                min
                max
            },
    },
`