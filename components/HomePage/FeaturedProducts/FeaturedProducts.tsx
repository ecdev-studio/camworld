import styles from './Featured_.module.scss'
import {NextComponentType} from "next";
import {IProduct} from "../../../types/data-types";
import ProductCard from "../../ProductCard/ProductCard";

const FeaturedProducts: NextComponentType<{}, {}, { products: Array<IProduct> }> = ({products}) => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.headline}>Featured Products</h3>
        <div className={styles.list}>
          {
            products && products.map((product, index) => {
              return (<div key={index} className={styles.item}>
                <ProductCard  product={product}/>
              </div>)
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts