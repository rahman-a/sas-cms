/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './Search-Result.module.scss'

const SearchResult = () => {
  return (
    <a href='#' className={styles.result}>
      <img
        src='/images/crisis.jpg'
        width={100}
        height={100}
        alt='placeholder'
      />
      <div className={styles.result__content}>
        <img
          src='/images/crisis.jpg'
          width={100}
          height={100}
          alt='placeholder'
        />
        <h4 className={styles.result__title}>Crisis communication </h4>
        <p className={styles.result__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quod.
        </p>
      </div>
    </a>
  )
}

export default SearchResult
