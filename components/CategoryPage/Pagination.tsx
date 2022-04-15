import {NextComponentType} from "next";
import React from "react";
import styles from './Pagination_.module.scss'
import {useTypedSelector} from "../../hook/useTypedSelector";
import {store} from "../../store";
import {changeFilter} from "../../store/action-creator/global-action-creator";

const Pagination: NextComponentType<{}, {}, { limit: number, count: number }> = ({limit, count}) => {
	const filter = useTypedSelector(state => state.filter);

	const sortHandler = (value: number) => {
		const page = filter.page + value;
		store.dispatch(changeFilter({...filter, page: page}));
	}

	return (
		<div className={styles.section}>
			<div className={styles.list}>
				{filter.page !== 1 &&
        <>
          <button className={styles.button} onClick={() => sortHandler(-1)}>
            <svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className={`${styles.svg} ${styles.first}`}>
              <path d="M1.5 1L5.5 5.5L1.5 10" stroke="#242222" strokeWidth="1"/>
            </svg>
          </button>
          <button className={styles.button}
						onClick={() => sortHandler(-1)}
          >
						{filter.page - 1}
          </button>
        </>
				}
				<button className={`${styles.button} ${styles.current}`}>{filter.page}</button>
				{count > filter.page * limit &&
        <>
          <button className={styles.button}
						onClick={() => sortHandler(1)}
          >
						{filter.page + 1}</button>
          <button className={styles.button}
						  onClick={() => sortHandler(1)}
          >
            <svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className={styles.svg}>
              <path d="M1.5 1L5.5 5.5L1.5 10" stroke="#242222" strokeWidth="1"/>
            </svg>
          </button>
        </>
				}
			</div>
		</div>
	);
}


export default Pagination