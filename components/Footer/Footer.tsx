import {NextComponentType} from "next";
import visa from '../../public/images/layout/visa.svg'
import express from '../../public/images/layout/express.svg'
import mastercard from '../../public/images/layout/mastercard.svg'
import paypal from '../../public/images/layout/paypal.svg'
import logo from '../../public/images/layout/logo-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer_.module.scss'
const Footer: NextComponentType = () => {
  return (
    <footer className={styles.section}>
      <div className={styles.head}>
        <div className={styles.inner}>
          <Link  href='/'>
            <a className={styles.logo}>
              <Image src={logo} alt="ecdev"/>
            </a>
          </Link>
          <div className={styles.info}>
            <div className={styles.social}>
              <h6 className={styles.social__title}>Social</h6>
              <div className={styles.social__list}>
                <a href="https://www.instagram.com/" target='_blank' rel='noreferrer' className={styles.social__item}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.facebook.com/" target='_blank' rel='noreferrer' className={styles.social__item}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://twitter.com/?lang=en" target='_blank' rel='noreferrer' className={styles.social__item}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.youtube.com/" target='_blank' rel='noreferrer' className={styles.social__item}>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
            <div className={styles.cards}>
              <h6 className={styles.cards__title}>We Accept</h6>
              <ul className={styles.cards__list}>
                <Image src={visa} className={styles.cards__item} alt='payment'/>
                <Image src={express} className={styles.cards__item} alt='payment' />
                <Image src={mastercard} className={styles.cards__item} alt='payment'/>
                <Image src={paypal} className={styles.cards__item} alt='payment'/>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inner}>
        <p className={styles.copyrights}>© 2021 CamWorld. All Rights Reserved.</p>
        <ul className={styles.links__list}>
          <li className={styles.links__item} >
            <Link href='/policy'>
              <a className={styles.footer__link}>Privacy Policy</a>
            </Link>
          </li>
          <li className={styles.links__item}>
            <Link href='/terms'>
              <a className={styles.footer__link}>Terms of Use</a>
            </Link>
          </li>
          <li className={styles.links__item}>
            <Link href='/'>
              <a className={styles.footer__link}>Site Map</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer