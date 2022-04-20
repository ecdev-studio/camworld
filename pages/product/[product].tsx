import Layout from '../../components/Layout/Layout'
import styles from '../../styles/ProductPage_.module.scss'
import iconCart from '../../public/images/ic_cart_product.svg'
import iconShipping from '../../public/images/ic_shipping.svg'
import { ICategory } from '../../types/data-types'
import { NextPage } from 'next'
import { FetchQuery, FetchQueryWithProps } from '../../hook/fetch-hooks'
import { getCategoryQuery, getProductBySlug } from '../../GraphQL/Schemas'

type PageProps = {
  menuArray: Array<ICategory>
}

const Product: NextPage<PageProps> = ({ menuArray }) => {

  return (
    <Layout menuArray={menuArray}>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.content__left}>

              <div className={styles.content__mobile}>

                <button className={styles.added}>
                  <img src={iconCart.src} alt="icon cart" className={styles.added__icon}/>
                  Add to cart
                </button>
                <div className={styles.shipping}>
                  <img src={iconShipping.src} alt="icon shipping" className={styles.shipping__icon}/>
                  <span className={styles.shipping__text}>FREE SHIPPING Available</span>
                </div>
              </div>

            </div>

            <div className={styles.content__right}>
              <div className={styles.content__inner}>

                <button className={styles.added}>
                  <img src={iconCart.src} alt="icon cart" className={styles.added__icon}/>
                  Add to cart
                </button>
                <div className={styles.shipping}>
                  <img src={iconShipping.src} alt="icon shipping" className={styles.shipping__icon}/>
                  <span className={styles.shipping__text}>FREE SHIPPING Available</span>
                </div>
              </div>
            </div>
          </div>
          {/*{false && <Message variant='error'>{false}</Message>}*/}
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps (context: any) {
  const menuData = await FetchQuery(getCategoryQuery)
  const menuArray = menuData.data.getCategories

  const productData = await FetchQueryWithProps(getProductBySlug, {
    slug :context.resolvedUrl
  })

  return {
    props: {
      menuArray,
      productData
    }
  }
}

export default Product