import React, { FC } from 'react'
import styles from './Staff-Card.module.scss'
import Image from 'next/image'

interface StaffSocialProps {
  url: string
  icon: string
}

const StaffSocial: FC<StaffSocialProps> = ({ url, icon }) => {
  return (
    <a
      href={url}
      className={styles.card__social_link}
      target='_blank'
      rel='noreferrer'
    >
      <Image
        src={`/images/social/${icon}`}
        width={20}
        height={20}
        alt='social'
      />
    </a>
  )
}

export default StaffSocial
