import {NextComponentType} from "next";
import React from "react";
import styles from './ProductPage_.module.scss';
import {IProduct} from "../../types/data-types";
import Preview from "./Preview";

const ProductContent: NextComponentType<{}, {}, {
	product: IProduct
}> = ({product}) => {
	return (
		<div className={styles.product__content}>
			<div className={styles.product__content__left}>
				<Preview galleries={product.galleries}/>
			</div>
		</div>
	)
}


export default ProductContent