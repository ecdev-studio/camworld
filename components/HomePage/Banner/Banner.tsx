import styles from './Banner_.module.scss'
import stylesGlobal from '../../../styles/Global_.module.scss'
import Link from 'next/link'
import {NextComponentType} from "next";

const Banner:NextComponentType = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <span className={styles.flag}>FX Flagship</span>
        <h1 className={styles.headline}>Nikon <span>D5</span></h1>
        <p className={styles.tagline}>
          Introducing the D5, an FX-format DSLR that makes the impossible possible.
        </p>
        <Link href='/product/nikon-d5xqd'>
          <a className={`${styles.button} ${stylesGlobal.button}`}>
            Buy now
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L4 5L1 9" stroke="white" strokeWidth="1.5"/>
            </svg>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Banner