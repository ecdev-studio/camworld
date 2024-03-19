import React from 'react'
import blackStar from '../../public/images/ic_star_black.svg'
import grayStar from '../../public/images/ic_star_gray.svg'
import styles from './Rating_.module.scss'
import {NextComponentType} from 'next'
import Image from 'next/image'

interface IRating {
    value: number
    text: string
    hideCountReviewers: boolean
}

const Rating: NextComponentType<{}, {}, IRating> = ({value, text, hideCountReviewers}) => {

    return (
        <div className={styles.rating}>
            <div className={styles.rating__item}>
                <Image src={value < 1 ? grayStar : blackStar} alt="" className={styles.rating__icon}/>
            </div>
            <div className={styles.rating__item}>
                <Image src={value < 2 ? grayStar : blackStar} alt="" className={styles.rating__icon}/>
            </div>
            <div className={styles.rating__item}>
                <Image src={value < 3 ? grayStar : blackStar} alt="" className={styles.rating__icon}/>
            </div>
            <div className={styles.rating__item}>
                <Image src={value < 4 ? grayStar : blackStar} alt="" className={styles.rating__icon}/>
            </div>
            <div className={styles.rating__item}>
                <Image src={value < 5 ? grayStar : blackStar} alt="" className={styles.rating__icon}/>
            </div>
            {
                !hideCountReviewers && (
                    <span className={styles.rating__count}>({text})</span>
                )
            }
        </div>
    )
}

export default Rating
