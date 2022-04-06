import styles from './IncridibleShots_.module.scss'
import stylesGlobal from '../../../styles/Global_.module.scss'
import Link from 'next/link'
import {NextComponentType} from "next";
import lens from '../../../public/images/incredible-shots/lens.png'
import Image from 'next/image'
const IncridibleShots: NextComponentType = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.information}>
          <div className={styles.information__inner}>
            <div className={styles.left}>
              <h3 className={styles.headline}>
                Incredible shots made
                easier
              </h3>
              <p className={styles.tagline}>
                See your photos and videos come to life with stunning clarity and rich detail through legendary Canon
                cameras.
              </p>
              <Link href='/cameras'>
                <a className={`${styles.button} ${stylesGlobal.button}`}>Shop now
                  <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 5L1 9" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </a>
              </Link>
            </div>
            <div className={styles.right}>
              <Image src={lens} alt="lens" className={styles.image}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IncridibleShots