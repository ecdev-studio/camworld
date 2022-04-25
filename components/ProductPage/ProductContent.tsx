import {NextComponentType} from "next";
import React from "react";
import styles from './ProductPage_.module.scss';
import {IProduct} from "../../types/data-types";
import Preview from "./Preview";
import Information from "./Information";
import Image from "next/image";
import iconCart from "../../public/images/ic_cart_white.svg";
import iconShipping from "../../public/images/ic_shipping.svg";
import Tabs from "./Tabs";
import {store} from "../../store";
import {changeQuantity} from "../../store/action-creator/global-action-creator";

const ProductContent: NextComponentType<{}, {}, {
	product: IProduct
}> = ({product}) => {
	const addToCartHandler = () => {
		const item = {
			name: product.name,
			image: product.image,
			price: product.price,
			id: product.id,
			slug: product.slug,
			quantity: 1
		}
		store.dispatch(changeQuantity(item, 1))
	}

	return (
		<div className={styles.product__content}>
			<div className={styles.product__content__left}>
				<Preview galleries={product.galleries}/>
				<div className={styles.product__content__left__mobile}>
					<Information product={product} />
					<button onClick={addToCartHandler} className={styles.product__add_to_cart}>
						<Image
							className={styles.product__add_to_cart__icon}
							src={iconCart}
							width={20}
							height={18}
							alt={'icon cart'}
						/>
						Add to cart
					</button>
					<div className={styles.product__shipping}>
						<Image
							className={styles.product__shipping__icon}
							src={iconShipping}
							width={21}
							height={13}
							alt={'icon shipping'}
						/>
						<span className={styles.product__shipping__text}>FREE SHIPPING Available</span>
					</div>
				</div>
				<Tabs product={product} />
			</div>
			<div className={styles.product__content__right}>
				<div className={styles.product__content__right__inner}>
					<Information product={product} />
					<button onClick={addToCartHandler} className={styles.product__add_to_cart}>
						<Image
							className={styles.product__add_to_cart__icon}
							src={iconCart}
							width={20}
							height={18}
							alt={'icon cart'}
						/>
						Add to cart
					</button>
					<div className={styles.product__shipping}>
						<Image
							className={styles.product__shipping__icon}
							src={iconShipping}
							width={21}
							height={13}
							alt={'icon shipping'}
						/>
						<span className={styles.product__shipping__text}>FREE SHIPPING Available</span>
					</div>
				</div>
			</div>
		</div>
	)
}


export default ProductContent