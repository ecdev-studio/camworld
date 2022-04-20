import {NextComponentType} from "next";
import React from "react";
import styles from './CheckoutPage_.module.scss'

const ShippingStep: NextComponentType<{}, {}, {
	setPayment(value: string): void,
	changeStep(value: string): void
}> = ({setPayment, changeStep}) => {

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setPayment('Cash on delivery');
		changeStep('placeorder');
	}

	return (
		<div className={styles.payment__inner}>
			<h1 className={`h2`}>Payment Method</h1>
			<form className={styles.payment__form} onSubmit={(e) => submitHandler(e)}>
				<div className={styles.payment__form__item}>
					<input type="radio" id='COD' value='Cash on delivery' checked
					       name='paymentMethod'/>
					<label htmlFor="COD">Cash on delivery</label>
				</div>
				<div className={styles.payment__form__submit}>
					<button className={styles.payment__form__button} type='submit'>Continue</button>
				</div>
			</form>
		</div>
	)
}


export default ShippingStep