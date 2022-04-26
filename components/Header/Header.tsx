import {NextComponentType} from "next";
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Header_.module.scss'
import headLineIcon from '../../public/images/layout/head-line.svg'
import logoIcon from '../../public/images/layout/logo.svg'
import {store} from "../../store";
import {toggleMenu} from "../../store/action-creator/global-action-creator";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {ICategory} from "../../types/data-types";


const Header: NextComponentType<{}, {}, { menuArray: Array<ICategory> }> = ({menuArray}) => {
	const cart = useTypedSelector(state => state.cart);
	const [items, setItems] = useState<number>(0);
	const [hideTop, setHideTop] = useState(false);
	const mobMenu = useTypedSelector(state => state.app.visibleMobileMenu);
	useEffect(() => {
		window.onscroll = () => {
			window.pageYOffset > 100 ? setHideTop(true) : setHideTop(false)
		}
	}, []);

	useEffect(() => {
		let quantity = 0
		cart.forEach((x) => {
			quantity = quantity + x.quantity
		})
		setItems(quantity)
	}, [cart])

	const showMobileMenu = () => {
		store.dispatch(toggleMenu(!mobMenu))
	}

	return (
		<header className={hideTop ? `${styles.section} ${styles.hide}` : styles.section}>
			<div className={hideTop ? `${styles.top} ${styles.hide}` : `${styles.top}`}>
				<div className={styles.top__information}>
					<span className={styles.top__title}>DEMO STORE</span>
					<span className={styles.top__title}>DEMO STORE</span>
					<div>
						<Image
							src={headLineIcon} alt="head line"
							className={styles.top__line}
						/>
						<span className={styles.top__text}>
               This is a demo store, created by EcDevStudio
            </span>
						<Image
							src={headLineIcon} alt="head line"
							className={styles.top__line}
						/>

					</div>
					<span className={styles.top__title}>DEMO STORE</span>
					<span className={styles.top__title}>DEMO STORE</span>
				</div>

			</div>
			<div className={styles.inner}>
				<Link href="/">
					<a className={styles.logo}>
						<Image src={logoIcon} alt="prim"/>
					</a>
				</Link>
				<nav className={styles.nav}>
					<ul className={styles.nav__list}>
						<li className={styles.nav__item}>
							<Link href="/">
								<a className={styles.nav__link}>Home</a>
							</Link>
						</li>
						{
							menuArray && menuArray.length !== 0 && menuArray.map((item, index) => {
								return <li className={styles.nav__item} key={index}>
									<Link href={`/${item.slug}`}>
										<a className={styles.nav__link}>{item.name}</a>
									</Link>
								</li>
							})
						}
					</ul>
				</nav>
				<ul className={styles.nav__list}>
					<li className={styles.nav__button}>
						<Link
							href="/cart"
						>
							<a className={`${styles.nav__link} ${styles.image}`}>
								<svg className={styles.icon} width="22" height="22" viewBox="0 0 22 22" fill="none"
								     xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10.6378 15.379C9.16685 15.379 7.82766 14.4768 7.27881 13.0465L3.85401 3.93643C3.8101 3.82641 3.70033 3.73839 3.56861 3.73839H1V2H3.56861C4.42481 2 5.19319 2.52812 5.47859 3.32029L6.0494 4.86064H18.9363C19.6389 4.86064 20.2755 5.21271 20.6487 5.78484C21.022 6.37897 21.0878 7.10513 20.8024 7.74328L18.4973 12.9584C18.2338 13.5526 17.685 13.9927 17.0483 14.1247L11.3622 15.291C11.1207 15.357 10.8793 15.379 10.6378 15.379ZM6.70801 6.59902L8.9034 12.4303C9.23271 13.2885 10.1109 13.7726 11.011 13.5966L16.697 12.4303C16.7849 12.4083 16.8727 12.3423 16.9166 12.2543L19.2217 7.03912C19.2876 6.90709 19.2217 6.79707 19.1998 6.75306C19.1559 6.70905 19.09 6.62103 18.9363 6.62103H6.70801V6.59902ZM7.63008 20C8.50823 20 9.21076 19.2738 9.21076 18.4156C9.21076 17.5355 8.48628 16.8093 7.63008 16.8093C6.75192 16.8093 6.02744 17.5355 6.02744 18.4156C6.02744 19.2958 6.75192 20 7.63008 20ZM17.1142 20C17.9923 20 18.6948 19.2738 18.6948 18.4156C18.6948 17.5355 17.9704 16.8093 17.1142 16.8093C16.236 16.8093 15.5115 17.5355 15.5115 18.4156C15.5115 19.2958 16.236 20 17.1142 20Z"
										fill="#242222"/>
								</svg>
								{
									items > 0 && (<span className={styles.icon__counter}>{items}</span>)
								}
							</a>
						</Link>
					</li>
					<div className={mobMenu ? `${styles.mobile} ${styles.active}` : styles.mobile} onClick={showMobileMenu}
					     onKeyDown={showMobileMenu} role="button" tabIndex={0}>
						<span/>
						<span/>
						<span/>
					</div>
				</ul>
			</div>
		</header>
	);
}

export default Header