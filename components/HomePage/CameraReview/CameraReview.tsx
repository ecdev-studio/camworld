import styles from './CameraReview_.module.scss'
import stylesGlobal from '../../../styles/Global_.module.scss'
import Link from 'next/link'
import {NextComponentType} from "next";

const CameraReview:NextComponentType = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.title}>Create without limits</h3>
        <p className={styles.tagline}>
          Once you’ve felt the liberating power, speed and performance of a Nikon DSLR, you’ll see why they’re the preferred tool of pro and aspiring
          photographers everywhere. See your photos and videos come to life with stunning clarity and rich detail through masterly-crafted Nikon DSLR cameras
          and world-renowned Nikkor lenses.
        </p>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles.item__left}`}>
            <div className={styles.information}>
              <span className={styles.name}>
                DX Series Nikon D850
              </span>
              <Link href='/cameras' >
                <a className={styles.link}>See DX Series Camera</a>
              </Link>
            </div>
          </li>
          <li className={`${styles.item} ${styles.item__right}`}>
            <div className={styles.information}>
              <span className={styles.name}>
                FX Series Nikon D610
              </span>
              <Link href='/cameras' >
                <a className={styles.link}>See FX Series Camera</a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default CameraReview