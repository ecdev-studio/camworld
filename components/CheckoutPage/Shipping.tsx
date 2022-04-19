import {NextComponentType} from "next";
import React, {useState} from "react";
import styles from './CheckoutPage_.module.scss'

const Shipping: NextComponentType<{}, {}, {}> = () => {
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [country, setCountry] = useState('');

	return (
		<div className={styles.shipping__inner}>
			<h1 className={`h2`}>Shipping</h1>
			<form className={styles.shipping__form}>
				<div className={styles.shipping__form__item}>
					<label htmlFor="address">Address</label>
					<input onChange={(e) => setAddress(e.target.value)}
					       className={styles.shipping__form__input}
					       id='address'
					       type="text"
					       name='address'
					       required
					       placeholder='Enter address'
					       value={address}
					/>
				</div>
				<div className={styles.shipping__form__item}>
					<label htmlFor="city">City</label>
					<input onChange={(e) => setCity(e.target.value)}
					       className={styles.shipping__form__input}
					       id='city'
					       type="text"
					       name='city'
					       required
					       placeholder='Enter city'
					       value={city}
					/>
				</div>
				<div className={styles.shipping__form__item}>
					<label htmlFor="postal-code">Postal Code</label>
					<input onChange={(e) => setPostalCode(e.target.value)}
					       className={styles.shipping__form__input}
					       id='postal-code'
					       type="text"
					       name='postal-code'
					       required
					       placeholder='Enter postal code'
					       value={postalCode}
					/>
				</div>
				<div className={styles.shipping__form__item}>
					<label htmlFor="country">Country</label>
					<input onChange={(e) => setCountry(e.target.value)}
					       className={styles.shipping__form__input}
					       id='country'
					       type="text"
					       name='country'
					       required
					       placeholder='Enter country'
					       value={country}
					/>
				</div>
				<div className={styles.shipping__form__submit}>
					<button className={styles.shipping__form__button} type='submit'>Continue</button>
				</div>
			</form>
		</div>
	)
}


export default Shipping