import {NextComponentType} from "next";
import React, {useEffect, useState} from "react";
import styles from './Filter_.module.scss'
import {getTrackBackground, Range} from 'react-range';
import {store} from "../../store";
import {changeFilter} from "../../store/action-creator/global-action-creator";
import {ICategory} from "../../types/data-types";
import FilterItem from "./FilterItem";
import {useTypedSelector} from "../../hook/useTypedSelector";

const CategoryFilter: NextComponentType<{}, {}, { minPrice: number, maxPrice: number, category: ICategory }>
	= ({
		   minPrice,
		   maxPrice,
		   category
	   }) => {
	const [viewPrice, setViewPrice] = useState(false);
	const [values, setValues] = React.useState([minPrice, maxPrice]);
	const [priceButtonValidation, setPriceButtonValidation] = useState(true)
	const filter = useTypedSelector(state => state.filter);

	const sortHandler = () => {
		store.dispatch(changeFilter({...filter, priceMin: values[0], priceMax: values[1]}))
	}

	useEffect(() => {
		if (minPrice > values[0] ||
			maxPrice < values[1]
			|| values[1] < values[0]) {
			setPriceButtonValidation(false)
		} else {
			setPriceButtonValidation(true)
		}
	}, [values, minPrice, maxPrice])

	return (
		<div className={styles.filter}>
			<div className={viewPrice ? `${styles.filter__category} ${styles.active}` : styles.filter__category}>
				<button className={`h5 ${styles.filter__category__title}`}
				        onClick={() => setViewPrice(prev => !prev)}>Price <span
					className={styles.filter__category__arrow}> </span></button>
				<div className={styles.filter__category__rage}>
					<div className={styles.filter__category__price_range}>
						<input type="text"
						       className={minPrice > values[0] || values[1] < values[0] ?
							       `${styles.filter__category__input} ${styles.error}` : styles.filter__category__input}
						       value={values[0]}
						       onChange={e => setValues(prev => {
								       return [
									       e.target.value ? parseInt(e.target.value) : 0,
									       prev[1]
								       ]
							       }
						       )}/>
						<span>-</span>
						<input type="text"
						       className={maxPrice < values[1] || values[1] < values[0] ?
							       `${styles.filter__category__input} ${styles.error}` : styles.filter__category__input}
						       value={values[1]}
						       onChange={e => setValues(prev => {
								       return [
									       prev[1],
									       e.target.value ? parseInt(e.target.value) : 0,
								       ]
							       }
						       )}/>
						<button onClick={sortHandler} disabled={!priceButtonValidation}
						        className={priceButtonValidation ? styles.filter__category__button : `${styles.filter__category__button} ${styles.not_active}`}>OK
						</button>
					</div>
					<Range
						values={values}
						step={10}
						min={minPrice}
						max={maxPrice}
						rtl={false}
						onChange={(values) => {
							setValues(values);
						}}
						renderTrack={({props, children}) => (
							<div
								onMouseDown={props.onMouseDown}
								onTouchStart={props.onTouchStart}
								style={{
									...props.style,
									height: '10px',
									display: 'flex',
									width: '100%',
									marginTop: '5px',
								}}
							>
								<div
									ref={props.ref}
									style={{
										height: '6px',
										width: '100%',
										borderRadius: '0px',
										background: getTrackBackground({
											values,
											colors: ['#eee', '#3dd5a2', '#eee'],
											min: minPrice,
											max: maxPrice,
											rtl: false,
										}),
										alignSelf: 'center'
									}}
								>
									{children}
								</div>
							</div>
						)}
						renderThumb={({props, isDragged}) => (
							<div
								{...props}
								style={{
									...props.style,
									height: '16px',
									width: '16px',
									borderRadius: '100%',
									backgroundColor: '#3dd5a2',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									boxShadow: '0px 2px 6px #AAA',
								}}
							>
								<div
									style={{
										height: '16px',
										width: '16px',
										borderRadius: '100%',
										transform: isDragged ? 'scale(1.3)' : 'scale(1)',
										transition: '0.3s ease-in, 0.3s ease-in-out'
									}}
								/>
							</div>
						)}
					/>
				</div>
			</div>
			{category && category.taxonomies && category.taxonomies.length > 0 && category.taxonomies.map((item) => {
				return (
					<FilterItem item={item} key={item.id}/>
				)
			})}
		</div>
	);
}


export default CategoryFilter