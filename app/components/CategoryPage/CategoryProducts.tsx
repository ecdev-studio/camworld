import {NextComponentType} from "next";
import React from "react";
import {IProduct} from "../../types/data-types";
import ProductCard from "../ProductCard/ProductCard";
import styles from './CategoryPage_.module.scss'

const CategoryProducts: NextComponentType<{}, {}, { products: Array<IProduct>, loader:boolean }> = ({products, loader}) => {
    return (
        <div className={`${loader ? `${styles.list} ${styles.not_active}` : styles.list}`}>
            {
                products.map((product, index) => {
                    return (
                        <div key={`${index}-${product.id}`} className={styles.item}>
                            <ProductCard key={index} product={product}/>
                        </div>
                    )
                })
            }
        </div>
    );
}


export default CategoryProducts