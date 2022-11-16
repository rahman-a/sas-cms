import React, { FunctionComponent } from 'react'
import styles from './Button.module.scss'
import {
  LongRightArrow,
  RightArrow,
  ThickLongRightArrow,
} from '@components/icons'

interface ButtonIconProps {
  icon: 'arrow' | 'thick-arrow' | 'long-arrow'
}

const ButtonIcon: FunctionComponent<ButtonIconProps> = ({ icon }) => {
  return (
    <span className={styles.btn__icon}>
      {icon === 'long-arrow' ? (
        <LongRightArrow />
      ) : icon === 'thick-arrow' ? (
        <ThickLongRightArrow />
      ) : (
        icon === 'arrow' && <RightArrow />
      )}
    </span>
  )
}

export default ButtonIcon
