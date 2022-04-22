import {NextComponentType} from "next";
import React, {useState} from "react";
import styles from './Preview_.module.scss';
import {IGallery} from "../../types/data-types";
import Image from "next/image";

const Preview: NextComponentType<{}, {}, {galleries: IGallery[]}> = ({galleries}) => {
	const [mainImage, setMainImage] = useState(galleries[0].url);

	const handleChangeImage = (value: string) =>{
		setMainImage(value)
	}

	const renderItems = (items: Array<IGallery>) =>{
		return items.map((item, index) =>{
			return(
				<div className={styles.product__thumbs__item} key={index} onClick={() => handleChangeImage(item.url)}>
					<Image
						className={styles.img}
						src={'/images/product' + item.url}
						width={52}
						height={52}
						alt={'product'}
					/>
				</div>
			)
		})
	}
	return (
		<div className={styles.product__preview}>
			<div className={styles.product__preview__left}>
				<div className={styles.product__thumbs}>
					{renderItems(galleries)}
				</div>
			</div>
			<div className={styles.product__preview__right}>
				<Image
					className={styles.img}
					src={'/images/product' + mainImage}
					width={505}
					height={300}
					alt={'product'}
				/>
			</div>
		</div>
	)
}

export default Preview