import {NextComponentType} from "next";
import {useEffect, useState} from "react";
import styles from './Filter_.module.scss';
import {ITaxonomy} from "../../types/data-types";
import {useTypedSelector} from "../../hook/useTypedSelector";

const FilterItem: NextComponentType<{}, {}, { item: ITaxonomy }> = ({item}) => {
	const [viewBrand, setBrand] = useState(false);
	const [subTaxonomies, setSubTaxonomies] = useState([]);
	const filter = useTypedSelector(state => state.filter);

	useEffect(() => {
		if (filter.subTaxonomy && filter.subTaxonomy.length > 0) {

		}
	}, [filter])

	return (
		<div className={viewBrand ? `${styles.filter__category} ${styles.active}` : 'filter__category'}>
			<button className={`h5 ${styles.filter__category__title}`} onClick={() => setBrand(prev => !prev)}>{item.name}
				<span
					className={styles.filter__category__arrow}> </span></button>
			<div className={styles.filter__category__brand}>
				<div className={styles.filter__category__form}>
					{item.subTaxonomies.map(tag => (
						<label key={tag.id} className={styles.filter__category__form__item}>
							<input
								name={tag.name}
								type="checkbox"
								value={tag.id}
								checked={!!subTaxonomies.find(x => x === tag.id)}
								// onClick={e => {
								// 	if (e.target.checked) {
								// 		sort([...subTaxonomies, tag.id])
								// 		setSubTaxonomies(prev => [...prev, tag.id])
								// 	} else {
								// 		sort(subTaxonomies.filter(x => x !== tag.id))
								// 		setSubTaxonomies(prev => prev.filter(x => x !== tag.id))
								// 	}
								// }}
							/>
							<span>{tag.name}</span>
						</label>
					))}
				</div>
			</div>
		</div>
	)
}

export default FilterItem