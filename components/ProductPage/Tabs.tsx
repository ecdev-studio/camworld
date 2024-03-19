import {NextComponentType} from "next";
import React, {useEffect, useState} from "react";
import styles from './Tabs.module.scss';
import {IDescription, IProduct, IReview, ISpecification} from "../../types/data-types";
import Rating from "../Rating/Rating";

const Tabs: NextComponentType<{}, {}, { product: IProduct }> = ({product}) => {
	const [tab, setTab] = useState('description')
	const [ratingList, setRatingList] = useState({
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	})

	const calculatePercentage = (ratingItem: number) => {
		const result = ratingItem / product.numReviews * 100
		return result.toFixed(2)
	}

	const toDate = (val: string) => {
		const tmpInt = parseInt(val)
		const date = new Date(tmpInt)
		return date.toLocaleString()
	}

	useEffect(() => {
		const calcRatingCountRepetition = () => {
			const ratingArray: Array<number> = []
			product.reviews.forEach(item => {
				ratingArray.push(item.rating)
			})

			return (
				ratingArray.reduce((acc: any, el: number) => {
					acc[el] = (acc[el] || 0) + 1
					return acc
				}, {})
			)
		}
		const tmp = calcRatingCountRepetition()
		setRatingList(prevState => ({...prevState, ...tmp}))
	}, [product.reviews])

	const renderSpecs = (items: ISpecification[]) => {
		return items.map((item, index) => {
			return (
				<li className={styles.specs_tab__item} key={index}>
        <span className={styles.specs_tab__name}>
          {item.key}
        </span>
					<p className={styles.specs_tab__description}>
						{item.value}
					</p>
				</li>
			)
		})
	}

	const renderDescription = (items: IDescription[]) => {
		return items.map((item, index) => {
			return (
				<li className={styles.description_tab__item} key={index}>
					<p className={styles.description_tab__tagline}>
						{item.title}
					</p>
					<p className={styles.description_tab__text}>
						{item.value}
					</p>
				</li>
			)
		})
	}

	const renderReview = (items: IReview[]) => {
		return items.map((item, index) => {
			return (
				<li className={styles.review_comments__item} key={index}>
					<div className={styles.review_comments__head}>
						<div className={styles.review_comments__head__inner}>
							<Rating value={item.rating} text={`${product.numReviews}`} hideCountReviewers={false}/>
							<span className={styles.review_comments__user_name}>
                {item.name}
              </span>
						</div>
						<span className={styles.review_comments__date_of_publication}>{toDate(item.createdAt)}</span>
					</div>
					<div className={styles.review_comments__body}>
						<p className={styles.review_comments__title}>
							{item.title}
						</p>
						<p className={styles.review_comments__text}>
							{item.review}
						</p>
					</div>
				</li>
			)
		})
	}

	const renderReviewResult = () => {
		const tmpArr = Object.entries(ratingList)
		return tmpArr.map((item, index) => {
			return (
				<li className={styles.reviews_result__item} key={index}>
					<div className={styles.reviews_result__item__name}>{item[0]} <span>stars</span></div>
					<div className={styles.reviews_result__item__scale}>
						<div
							className={styles.reviews_result__item__scale__line}
							style={{width: `${calculatePercentage(item[1])}%`}}
						/>
					</div>
					<div className={styles.reviews_result__item__count}>
						({item[1]})
					</div>
				</li>
			)
		})
	}

	return (
		<div className={styles.product_tabs}>
			<div className={styles.product_tabs__list}>
				<button
					className={`${styles.product_tabs__item} ${tab === 'description' && styles.active}`}
					onClick={() => setTab('description')}
				>
					Description
				</button>
				<button
					className={`${styles.product_tabs__item} ${tab === 'specs' && styles.active}`}
					onClick={() => setTab('specs')}
				>
					Specs
				</button>
				<button
					className={`${styles.product_tabs__item} ${tab === 'reviews' && styles.active}`}
					onClick={() => setTab('reviews')}
				>
					Reviews
				</button>
			</div>
			<div className={`${styles.product_tab__item} ${tab === 'description' && styles.activeTab}`}>
				<h5 className={styles.product_tab__headline}>
					Description
				</h5>
				<ul className={styles.description_tab__list}>
					{renderDescription(product.descriptions)}
				</ul>
			</div>
			<div className={`${styles.product_tab__item} ${tab === 'specs' && styles.activeTab}`}>
				<h5 className={styles.product_tab__headline}>
					Specs
				</h5>
				<ul className={styles.specs_tab__list}>
					{renderSpecs(product.specs)}
				</ul>
			</div>
			<div className={`${styles.product_tab__item} ${tab === 'reviews' && styles.activeTab}`}>
				<h5 className={styles.product_tab__headline}>
					Reviews
				</h5>
				<div className={styles.reviews_result}>
					<div className={styles.reviews_result__left}>
						<p className={styles.reviews_result__all_review}>
							<span>{product.numReviews}</span> User Review
						</p>
						<span className={styles.reviews_result__mark}>
              {product.rating}
            </span>
						<Rating value={product.rating} text={`null`} hideCountReviewers={true}/>
					</div>
					<div className={styles.reviews_result__right}>
						<ul className={styles.reviews_result__list}>
							{renderReviewResult()}
						</ul>
					</div>
				</div>
				<div className={styles.review_comments}>
					<ul className={styles.review_comments__list}>
						{renderReview(product.reviews)}
					</ul>
					{/*/*TODO Add review logic*/}
					{/*<button className={styles.review_comments__button} onClick={addVisiblePopup}>
						<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M14.7829 1.50351L15.5319 2.30912C16.156 2.98046 16.156 3.92034 15.5319 4.59168L5.42073 15.4674L1.80068 16.9444C1.55102 17.0787 1.30136 16.9444 1.17654 16.8101C1.05171 16.6758 0.926877 16.4073 1.05171 16.1388L2.54966 12.3793L12.6608 1.50351C13.1601 0.832164 14.1588 0.832164 14.7829 1.50351Z"
								stroke="#242222" strokeWidth="1.7" strokeMiterlimit="10"/>
						</svg>
						Write a review
					</button>*/}
				</div>
			</div>
		</div>
	)
}

export default Tabs