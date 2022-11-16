import React, { FC } from 'react'
import Image from 'next/image'
import styles from './Social.module.scss'

interface SocialIconProps {
  link: string
  src: string
  alt: string
}

const SocialIcon: FC<SocialIconProps> = ({ link, src, alt }) => {
  return (
    <li className={styles.social__item}>
      <a href={link} className={styles.social__link}>
        <Image
          width={25}
          height={25}
          src={`/images/social/${src}`}
          alt={alt}
          layout='fixed'
        />
      </a>
    </li>
  )
}

export default SocialIcon
