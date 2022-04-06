import {NextComponentType} from "next";
import React from 'react'
import Link from 'next/link'
import {useTypedSelector} from "../../hook/useTypedSelector";
import {ICategory} from "../../types/data-types";
import styles from './MobileMenu_.module.scss'
import { useRouter } from 'next/router';
const MobileMenu: NextComponentType<{}, {}, { menuArray: Array<ICategory> }> = ({menuArray}) => {
  const router = useRouter();
  const mobMenu = useTypedSelector(state => state.app.visibleMobileMenu)


  return (
    <div className={mobMenu ? `${styles.section} ${styles.show}` : styles.section}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href='/'>
            <a  className={router.pathname == "/" ? `${styles.link} ${styles.active}` :styles.link} >Home</a></Link>
        </li>
        {menuArray&&menuArray.length!==0&&menuArray.map((item, index) => {
          return <li className={styles.item} key={index}>
            <Link href={item.slug}>
              <a className={router.pathname == item.slug ? `${styles.link} ${styles.active}` :styles.link} >
                {item.name}
              </a>
            </Link>
          </li>
        })}
      </ul>
    </div>
  );
}

export default MobileMenu