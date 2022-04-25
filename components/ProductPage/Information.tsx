import {NextComponentType} from "next";
import React from "react";
import styles from './Information_.module.scss';
import Rating from "../Rating/Rating";
import {IHighlight, IProduct} from "../../types/data-types";
import iconStock from "../../public/images/ic_stock.svg"
import Image from "next/image";

const Information: NextComponentType<{}, {}, {product:IProduct}> = ({product}) => {
	const renderItems = (items:IHighlight[]) =>{
		return items.map((item, index) => {
			return(
				<li className={styles.highlights__item} key={index}>{ item.name }</li>
			)
		})
	}

	return (
		<div className={styles.product__information}>
			<div className={styles.product__information__inner}>
				<p className={styles.product__sku}><span className={styles.product__sku__abr}>SKU: </span>{product.sku}</p>
				<Rating value={product.rating} text={`${product.numReviews}`} hideCountReviewers={false}/>
			</div>
			<h1 className={styles.product__title}>{product.name}</h1>
			<div className={styles.product__information__inner}>
				<h3 className={styles.product__price}><span>$</span>{product.price}</h3>
				<p className={styles.product__in_stock}>
					<Image
						src={iconStock}
						width={14}
						height={14}
						alt={'icon stock'}
					/>
					In Stock
				</p>
			</div>
			<div className={styles.highlights}>
				<p className={styles.highlights__tagline}>Product Highlights</p>
				<ul className={styles.highlights__list}>
					{renderItems(product.highlights)}
				</ul>
			</div>
		</div>
	)
}

export default Information