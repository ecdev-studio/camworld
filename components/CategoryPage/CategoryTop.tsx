import {NextComponentType} from "next";
import React, {ChangeEvent, useState} from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styles from './CategoryPage_.module.scss'
import {store} from "../../store";
import {changeFilter} from "../../store/action-creator/global-action-creator";
import {useTypedSelector} from "../../hook/useTypedSelector";

const CategoryTop: NextComponentType<{}, {}, { name: string }> = ({name}) => {
    const [sortBy, setSortBy] = useState("low_to_high")
    const filter = useTypedSelector(state => state.filter);

    const sort=async (e:ChangeEvent<HTMLSelectElement>)=>{
        setSortBy(e.target.value)
        store.dispatch(changeFilter({...filter, sortBy: e.target.value}))
    }

    return (
        <>
            <BreadCrumbs name={name} />
            <div className={styles.head}>
                <h3 className={styles.title}>DSLR and Mirrorless Cameras</h3>
                <div className={styles.sort}>
                    <label htmlFor="sort">SORT BY:</label>
                    <select name="sort" className={styles.select} id="sort"
                            onChange={e => sort(e)} value={sortBy}>
                        <option value="low_to_high">Price: Low to High</option>
                        <option value="high_to_low">Price: High to Low</option>
                        <option value="date-desc">Date</option>
                    </select>
                </div>
            </div>
        </>
    );
}


export default CategoryTop