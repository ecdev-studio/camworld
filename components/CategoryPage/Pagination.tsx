import {NextComponentType} from "next";
import React, {useState} from "react";
import styles from './Pagination_.module.scss'
const Pagination: NextComponentType<{}, {}, {limit:number,count:number}> = ({limit,count}) => {
    const [currentPage,setCurrentPage]=useState(1)
    return (
        <div className={styles.section}>
            <div className={styles.list}>
                {currentPage !== 1 &&
                <>
                    <button className={styles.button} onClick={() => {
                       /* paginationFunc(currentPage - 1).then(() => setCurrentPage(prev => prev - 1))*/
                    }}>
                        <svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className={`${styles.svg} ${styles.first}`}>
                            <path d="M1.5 1L5.5 5.5L1.5 10" stroke="#242222" strokeWidth="1"/>
                        </svg>
                    </button>
                    <button className={styles.button}
                            /*onClick={() => paginationFunc(currentPage - 1).then(() =>
                                setCurrentPage(prev => prev - 1))}*/
                    >
                        {currentPage - 1}
                    </button>
                </>
                }
                <button className={`${styles.button} ${styles.current}`}>{currentPage}</button>
                {count > currentPage * limit &&
                <>
                    <button className={styles.button}
                            /*onClick={() => paginationFunc(currentPage + 1).then(() =>
                                setCurrentPage(prev => prev + 1))}*/
                    >
                        {currentPage + 1}</button>
                    <button className={styles.button}
                          /*  onClick={() => paginationFunc(currentPage + 1).then(() =>
                                setCurrentPage(prev => prev + 1))}*/
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