import React from 'react'
import styles from '../styles/pages/404.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { NotFoundIcon } from '../components/icons'

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <div className={styles.notfound__wrapper}>
        <div className={styles.notfound__logo}>
          <Image
            src='/images/logo.png'
            alt='SAS logo'
            width={100}
            height={100}
            layout='responsive'
          />
        </div>
        <div className={styles.notfound__message}>
          <div className={styles.notfound__icon}>
            <NotFoundIcon />
          </div>
          <h1>Sorry!</h1>
          <h2>
            That page doesn&apos;t exist!
            <br />
            Please try one of the following:
          </h2>
          <ul>
            <li>
              If you typed the page address into the web address bar, make sure
              that it is spelled correctly.
            </li>
            <li>
              Visit the
              <Link href='/'>
                <a> sas.com home page</a>
              </Link>
            </li>
            <li>
              Or check out our
              <Link href='/site-map'>
                <a> site map</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.notfound__trim}>&nbsp;</div>
      </div>
    </div>
  )
}

export default NotFound
