import {NextComponentType} from "next";
import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import styles from './BreadCrumbs_.module.scss'
import arrow from '../../public/images/arrowBack.svg'
import Image from 'next/image'

const BreadCrumbs: NextComponentType<{}, {}, { name: string }> = ({name}) => {
    const router = useRouter()
    return (
        <div className={styles.section}>
            <Link href='/'>
                <a className={styles.item}>
                    <div className={styles.back}>
                        <Image className='arrow' width={16} height={16} src={arrow} alt="arrow"/>
                        <strong>Back</strong>
                    </div>
                    CamWorld
                </a>
            </Link>
            <Link href={router.asPath}>
                <a className={styles.item}>
                    {name}
                </a>
            </Link>
        </div>
    )

}


export default BreadCrumbs