import classNames from 'classnames'
import React, { forwardRef } from 'react'
import styles from './Nav-Back-Button.module.scss'
import { LeftArrow } from '@components/icons'

interface NavBackButtonProps {
  text: string
  l2?: boolean
  backHandler(): void
}

const NavBackButton = forwardRef<HTMLButtonElement, NavBackButtonProps>(
  ({ l2, text, backHandler }, ref) => {
    const btnClasses = classNames(styles.btn, {
      [styles.btn__l2]: l2,
    })
    return (
      <button ref={ref} className={btnClasses} onClick={backHandler}>
        <span>
          <LeftArrow />
        </span>
        {text}
      </button>
    )
  }
)

NavBackButton.displayName = 'NavBackButton'

export default NavBackButton
