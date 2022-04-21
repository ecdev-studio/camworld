import React, {useEffect, useState} from "react";
import styles from './CartPage_.module.scss'
import stylesGlobal from '../../styles/Global_.module.scss'
import {NextComponentType} from "next";
import {useTypedSelector} from "../../hook/useTypedSelector";
import Link from 'next/link';
import {ICart} from "../../types/redux-types";
import {store} from "../../store";
import {changeQuantity, removeCartItem} from "../../store/action-creator/global-action-creator";
import Image from "next/image";

const CartContent: NextComponentType<{}, {}, {}> = () => {
	const cart = useTypedSelector(state => state.cart);
	const [items, setItems] = useState<number>(0);
	const [price, setPrice] = useState<number>(0);

	useEffect(() => {
		let summa = 0
		let quantity = 0
		cart.forEach((x) => {
			summa = x.price * x.quantity + summa
			quantity = quantity + x.quantity
		})
		setItems(quantity)
		setPrice(summa)
	}, [cart])

	const removeFromCartHandler = (product: ICart) => {
		store.dispatch(removeCartItem(product))
	}

	const changeCartQtyHandler = (product: ICart, value: number) => {
		store.dispatch(changeQuantity(product, value))
	}

	return (
		<>
			{items === 0 && (<div className={`${stylesGlobal.message} ${stylesGlobal.info}`}>Your cart is empty</div>)}
			{items > 0 && (
				<div className={styles.cart__content}>
					<div className={styles.cart__content__left}>
						<div className={styles.cart__product}>
							<div className={styles.cart__product__head}>
								<p className={styles.cart__product__head__name}>Product</p>
								<p className={styles.cart__product__head__qty}>Quantity</p>
								<p className={styles.cart__product__head__total}>Total</p>
							</div>
							{cart.map((product) => {
								return (
									<div key={product.id} className={styles.cart__product__item}>
										<Link href={product.slug}>
											<a className={styles.cart__product__item__image_wrap}>
												<Image
													className={styles.cart__product__item__image}
													src={'/images/product' + product.image}
													width={180}
													height={180}
													alt={product.name}
												/>
											</a>
										</Link>
										<div className={styles.cart__product__item__info}>
											<Link href={`/product/${product.slug}`}>
												<a className={styles.cart__product__item__title}>
													{product.name}
												</a>
											</Link>
											<p className={styles.cart__product__item__price}>${product.price}</p>
											<button onClick={() => removeFromCartHandler(product)}
											        className={styles.cart__product__item__remove}>
												<span>Remove</span>
											</button>
										</div>
										<div className={styles.cart__product__item__qty}>
											<button onClick={() => changeCartQtyHandler(product, -1)}
											        className={styles.cart__product__item__qty_btn}>
												<svg height="426pt" viewBox="0 -192 426.66667 426" width="426pt"
												     xmlns="http://www.w3.org/2000/svg">
													<path
														d="m405.332031 43h-384c-11.773437 0-21.332031-9.558594-21.332031-21.332031 0-11.777344 9.558594-21.335938 21.332031-21.335938h384c11.777344 0 21.335938 9.558594 21.335938 21.335938 0 11.773437-9.558594 21.332031-21.335938 21.332031zm0 0"/>
												</svg>
											</button>
											<span className={styles.cart__product__item__qty_val}>{product.quantity}</span>
											<button onClick={() => changeCartQtyHandler(product, 1)}
											        className={styles.cart__product__item__qty_btn}>
												<svg height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt"
												     xmlns="http://www.w3.org/2000/svg">
													<path
														d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/>
												</svg>
											</button>
										</div>
										<p
											className={styles.cart__product__item__total}>${(product.quantity * product.price).toFixed(2)}</p>
									</div>
								)
							})}
						</div>
					</div>
					<div className={styles.cart__content__right}>
						<div className={styles.cart__order}>
							<h5 className={styles.cart__order__title}>Order Summary</h5>
							<div className={styles.cart__order__item}>
								<p>{items > 1 ? items + ' Items' : items + ' Item'}</p>
								<p>${price.toFixed(2)}</p>
							</div>
							<div className={`${styles.cart__order__item} ${styles.total}`}>
								<p>Total</p>
								<p>${price.toFixed(2)}</p>
							</div>
							<Link href={'/checkout'}>
								<a className={styles.cart__order__button}>Checkout</a>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default CartContent