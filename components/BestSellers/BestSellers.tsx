import styles from './BestSellers_.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {NextComponentType} from "next";
import greenIconArrow from '../../public/images/cameras-review/ic_green-arrow.svg'
import iconArrow from '../../public/images/ic_arrow.svg'
import item1 from '../../public/images/best-sellers/item1.png'
import item2 from '../../public/images/best-sellers/item2.png'
import item3 from '../../public/images/best-sellers/item3.png'
import item4 from '../../public/images/best-sellers/item4.png'

const CameraReview: NextComponentType = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.headline}>Best Sellers Today</h3>
        <Link href='/cameras'>
          <a className={styles.bestSellers__viewmore}>
            View More <Image src={iconArrow} alt="icon arrow"/>
          </a>
        </Link>
        <div className={styles.list}>
          <div className={styles.left}>
            <Link href='/cameras'>
              <a className={`${styles.item} ${styles.left__item}`}>
                <Image src={item1} alt="item1"/>
                <div className={styles.information}>
                  <p className={styles.tagline}>FX Flagship</p>
                  <p className={styles.name}>Nikon D6</p>
                  <p className={styles.learnmore}>
                    Learn More <Image src={greenIconArrow} alt="icon arrow"/>
                  </p>
                </div>
              </a>
            </Link>

          </div>
          <div className={styles.right}>
            <Link href='/cameras'>
              <a className={`${styles.item} ${styles.right__item}`}>
                <Image src={item2} alt="item2"/>
                <div className={styles.information}>
                  <p className={styles.tagline}>FX Professional</p>
                  <p className={styles.name}>Nikon D850</p>
                  <p className={styles.learnmore}>
                    Learn More <Image src={greenIconArrow} alt="icon arrow"/>
                  </p>
                </div>
              </a>
            </Link>
            <Link href='/product/nikon-d5xqd'>
              <a className={`${styles.item} ${styles.right__item}`}>
                <Image src={item3} alt="item3"/>
                <div className={styles.information}>
                  <p className={styles.tagline}>FX Advanced Entry</p>
                  <p className={styles.name}>Nikon D5XQD</p>
                  <p className={styles.learnmore}>
                    Learn More <Image src={greenIconArrow} alt="icon arrow"/>
                  </p>
                </div>
              </a>
            </Link>
            <Link href='/cameras' >
              <a className={`${styles.item} ${styles.right__item}`}>
                <Image src={item4} alt="item4"/>
                <div className={styles.information}>
                  <p className={styles.tagline}>FX Entry-Level</p>
                  <p className={styles.name}>Nikon D610</p>
                  <p className={styles.learnmore}>
                    Learn More <Image src={greenIconArrow} alt="icon arrow"/>
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CameraReview