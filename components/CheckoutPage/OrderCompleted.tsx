import {NextComponentType} from "next";
import React from "react";
import styles from './CheckoutPage_.module.scss';
import Image from "next/image";

const OrderCompleted: NextComponentType<{}, {}, {}> = () => {
	return (
		<div className={styles.popup}>
			<div className={styles.popup__inner}>
				<div className={styles.popup__content}>
					<Image
						className={styles.popup__image}
						src={'/images/ic_success_order.png'}
						width={150}
						height={150}
						alt={'success'}
					/>
					<p className={styles.popup__text}>Order successfully placed!</p>
				</div>
			</div>
		</div>
	)
}

export default OrderCompleted