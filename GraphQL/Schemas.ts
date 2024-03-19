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

export const getProductsFilter = gql`
  query ($categoryId: Int,$sort:sortItem,$subTaxonomy:[Int],$limit:Int,$offset:Int) {
	    getProducts(categoryId:$categoryId, sort:$sort,subTaxonomy:$subTaxonomy,limit:$limit,offset:$offset) {
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
    }
  }
`

export const getProductBySlug = gql`
  query($slug: String!) {
    getProductBySlug(slug: $slug) {
      id
      name
      slug
      image
      descriptions{
        title
        value
      }
      categoryId
      price
      sku
      youtubeEmbed
      rating
      numReviews
      category {
        name
        slug
        taxonomies {
          name
          subTaxonomies {
            name
            taxonomyId
          }
        }
      }
      galleries {
        url
        productId
      }
      highlights {
        name
        productId
      }
      reviews {
        name
        email
        title
        review
        rating
        productId
        createdAt
      }
      specs {
        key
        value
        productId
      }
    }
  }
`