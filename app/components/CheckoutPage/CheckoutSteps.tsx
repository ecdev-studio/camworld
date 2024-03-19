import {NextComponentType} from "next";
import React from "react";
import styles from './CheckoutSteps_.module.scss'

const steps = [
	{ to: 'shipping', label: 'Shipping' },
	{ to: 'payment', label: 'Payment' },
	{ to: 'placeorder', label: 'Complete Order' },
]

const CheckoutSteps: NextComponentType<{}, {}, {step: string, changeStep(value: string):void}> = ({step, changeStep}) => {
	return (
		<div className={styles.checkoutSteps}>
			<div className={styles.checkoutSteps__inner}>
				<div className={styles.checkoutSteps__list}>
					{steps.map((item, index) => (
						<button className={`${styles.checkoutSteps__item} ${step === item.to ? styles.active : null}`} key={index} onClick={() => changeStep(item.to)}>
							<span className={styles.checkoutSteps__index}>{index + 1}</span>
							<span className={styles.checkoutSteps__name}>{item.label}</span>
						</button>
					))}
				</div>
			</div>
		</div>
	)
}


export default CheckoutSteps