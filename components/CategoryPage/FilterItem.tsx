import {NextComponentType} from "next";
import {ChangeEvent, useEffect, useState} from "react";
import styles from './Filter_.module.scss';
import {ITaxonomy} from "../../types/data-types";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {store} from "../../store";
import {changeFilter} from "../../store/action-creator/global-action-creator";

const FilterItem: NextComponentType<{}, {}, { item: ITaxonomy }> = ({item}) => {
	const [viewBrand, setBrand] = useState(false);
	const [update, setUpdate] = useState(false);
	const filter = useTypedSelector(state => state.filter);
	const [subTaxonomies, setSubTaxonomies] = useState<number[]>(filter.subTaxonomy);

	useEffect(() => {
		if (update) {
			store.dispatch(changeFilter({...filter, subTaxonomy: subTaxonomies}))
			setUpdate(false)
		}
	}, [subTaxonomies, filter, update])

	const checkHandler = (e:ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			setSubTaxonomies(prev => [...prev, parseInt(e.target.value)])
		} else {
			setSubTaxonomies(prev => prev.filter(x => x !== parseInt(e.target.value)))
		}
		setUpdate(true)
	}

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
								defaultChecked={!!subTaxonomies.find(x => x === tag.id)}
								onChange={(e) => checkHandler(e)}
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