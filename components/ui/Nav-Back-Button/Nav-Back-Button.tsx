import classNames from 'classnames'
import React, { forwardRef } from 'react'
import styles from './Nav-Back-Button.module.scss'
import { LeftArrow } from '@components/icons'

interface NavBackButtonProps {
  className?: string
  text: string
  l2?: boolean
  backHandler(): void
}

const NavBackButton = forwardRef<HTMLButtonElement, NavBackButtonProps>(
  ({ l2, text, backHandler, className }, ref) => {
    const btnClasses = classNames(styles.btn, {
      [styles.btn__l2]: l2,
      [className as string]: className,
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
