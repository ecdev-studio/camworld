import {NextComponentType} from "next";
import React from "react";
import styles from './CheckoutPage_.module.scss'

interface IShipping {
	address: string,
	city: string,
	postalCode: string,
	country: string,
}

const ShippingStep: NextComponentType<{}, {}, {
	shipping: IShipping, setShipping: (cb: (value: IShipping) => IShipping) => void,
	changeStep(value: string): void
}> = ({shipping, setShipping, changeStep}) => {

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		changeStep('payment');
	}

	return (
		<div className={styles.shipping__inner}>
			<h1 className={`h2`}>Shipping</h1>
			<form className={styles.shipping__form} onSubmit={(e) => submitHandler(e)}>
				<div className={styles.shipping__form__item}>
					<label htmlFor="address">Address</label>
					<input onChange={(e) => setShipping(prevState => ({...prevState, address: e.target.value}))}
					       className={styles.shipping__form__input}
					       id='address'
					       type="text"
					       name='address'
					       required
					       placeholder='Enter address'
					       value={shipping.address}
					/>
				</div>
				<div className={styles.shipping__form__item}>
					<label htmlFor="city">City</label>
					<input onChange={(e) => setShipping(prevState => ({...prevState, city: e.target.value}))}
					       className={styles.shipping__form__input}
					       id='city'
					       type="text"
					       name='city'
					       required
					       placeholder='Enter city'
					       value={shipping.city}
					/>
				</div>
				<div className={styles.shipping__form__item}>
					<label htmlFor="postal-code">Postal Code</label>
					<input onChange={(e) => setShipping(prevState => ({...prevState, postalCode: e.target.value}))}
					       className={styles.shipping__form__input}
					       id='postal-code'
					       type="text"
					       name='postal-code'
					       required
					       placeholder='Enter postal code'
					       value={shipping.postalCode}
					/>
				</div>
				<div className={styles.shipping__form__item}>
					<label htmlFor="country">Country</label>
					<input onChange={(e) => setShipping(prevState => ({...prevState, country: e.target.value}))}
					       className={styles.shipping__form__input}
					       id='country'
					       type="text"
					       name='country'
					       required
					       placeholder='Enter country'
					       value={shipping.country}
					/>
				</div>
				<div className={styles.shipping__form__submit}>
					<button className={styles.shipping__form__button} type='submit'>Continue</button>
				</div>
			</form>
		</div>
	)
}


export default ShippingStep