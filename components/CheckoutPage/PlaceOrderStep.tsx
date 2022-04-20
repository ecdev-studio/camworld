import {NextComponentType} from "next";
import React, {useEffect, useState} from "react";
import styles from './CheckoutPage_.module.scss';
import {IShipping} from "../../types/data-types";
import Link from 'next/link';
import {useTypedSelector} from "../../hook/useTypedSelector";
import Image from "next/image";
import {store} from "../../store";
import {clearCart} from "../../store/action-creator/global-action-creator";
import Router from 'next/router'
import OrderCompleted from "./OrderCompleted";

const PlaceOrderStep: NextComponentType<{}, {}, { shipping: IShipping, payment: string }> = ({shipping, payment}) => {
	const cart = useTypedSelector(state => state.cart);
	const [showPopup, setShowPopup] = useState(false);
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

	const placeOrderHandler = () => {
		setShowPopup(true)
		setTimeout(() => {
			store.dispatch(clearCart())
			Router.push('/')
			setShowPopup(false)
		}, 3000)
	}

	return (
		<>
			{showPopup && <OrderCompleted/>}
			<div className={styles.placeOrder__inner}>
				<div className={styles.placeOrder__left}>
					<div className={styles.placeOrder__shipping}>
						<h3 className={styles.placeOrder__shipping__title}>Shipping</h3>
						<p className={styles.placeOrder__shipping__text}>
							<strong>Address: </strong>
							{shipping.address}, {' '}
							{shipping.city} {' '}
							{shipping.postalCode},{' '}
							{shipping.country}
						</p>
					</div>
					<div className={styles.placeOrder__payment}>
						<h3 className={styles.placeOrder__payment__title}>Payment Method</h3>
						<p className={styles.placeOrder__payment__text}>
							<strong>Method: </strong>
							{payment}
						</p>
					</div>
					<div className={styles.placeOrder__cart}>
						<h3 className={styles.placeOrder__cart__title}>Order Items</h3>
						<div className={styles.placeOrder__cart__list}>
							{cart && cart.map((item, index) => (
								<div className={styles.placeOrder__cart__item} key={index}>
									<Image
										className={styles.placeOrder__cart__item__image}
										src={'/images/product' + item.image}
										width={80}
										height={80}
										alt={item.name}
									/>
									<div className={styles.placeOrder__cart__item__info}>
										<Link href={item.slug}>
											<a className={styles.placeOrder__cart__item__name}>
												{item.name}
											</a>
										</Link>
										<p className={styles.placeOrder__cart__item__qty}>Quantity: {item.quantity}</p>
									</div>
									<p className={styles.placeOrder__cart__item__price}>${item.quantity * item.price}</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className={styles.placeOrder__right}>
					<div className={styles.placeOrder__summary}>
						<h3 className={styles.placeOrder__summary__title}>Order Summary</h3>
						<div className={styles.placeOrder__summary__item}>
							<p className={styles.placeOrder__summary__item__name}>{items > 1 ? items + ' Items' : items + ' Item'}</p>
							<p className={styles.placeOrder__summary__item__value}>${price.toFixed(2)}</p>
						</div>
						<div className={styles.placeOrder__summary__item}>
							<p className={styles.placeOrder__summary__item__name}>Shipping</p>
							<p className={styles.placeOrder__summary__item__value}>Free</p>
						</div>
						<div className={`${styles.placeOrder__summary__item} ${styles.total}`}>
							<p className={styles.placeOrder__summary__item__name}>Total</p>
							<p className={styles.placeOrder__summary__item__value}>${price.toFixed(2)}</p>
						</div>
						<button onClick={placeOrderHandler} className={styles.placeOrder__summary__button}>Place Order</button>
					</div>
				</div>
			</div>
		</>
	)
}


export default PlaceOrderStep