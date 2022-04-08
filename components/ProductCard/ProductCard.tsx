import styles from './ProductCard_.module.scss'
import {NextComponentType} from "next";
import {IProduct} from "../../types/data-types";
import Link from 'next/link'
import Image from "next/image";
import {changeQuantity} from "../../store/action-creator/global-action-creator";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {store} from "../../store";


const ProductCard: NextComponentType<{}, {}, { product: IProduct }> = ({product}) => {
  const addToCartHandler = () => {
      const item = {
          name: product.name,
          image: product.image,
          price: product.price,
          id: product.id,
          slug: product.slug,
          quantity:1
      }
      store.dispatch(changeQuantity(item,1))
  }

  return (
    <>
      <Link href={product.slug}>
        <a className={styles.image_wrap}>
          <Image className={styles.image} src={'https://camworld.ecdevstudio.com'+product.image} width={180} height={180} alt={product.name}/>
        </a>
      </Link>
      {/*<Rating value={product.rating} text={`${product.numReviews}`} />*/}
      <Link href={product.slug}>
        <a><h6 className={styles.title}>{product.name}</h6></a>
      </Link>
      <div className={styles.bottom}>
        <h5 className={styles.price}>
          <sup><small>$</small></sup>{product.price}</h5>
        <button onClick={() => addToCartHandler()} className={styles.button}>
          <div className={styles.icon_cart}></div>
          Add to Cart
        </button>
        <div className={styles.icon_cart}></div>
      </div>
    </>
  )
}

export default ProductCard