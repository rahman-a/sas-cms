import React, { FunctionComponent } from 'react'
import styles from './Hamburger.module.scss'
import classnames from 'classnames'

interface HamburgerProps {
  isOpen: boolean
  toggleHandler: () => void
}

const Hamburger: FunctionComponent<HamburgerProps> = ({
  isOpen,
  toggleHandler,
}) => {
  const hamburgerClasses = classnames(styles.hamburger, {
    [styles['hamburger__is-open']]: isOpen,
  })
  const hamburgerTopBarClasses = classnames(
    styles.hamburger__bar,
    styles['hamburger__bar-top'],
    {
      [styles['hamburger__bar-white']]: isOpen,
    }
  )
  const hamburgerMiddleBarClasses = classnames(
    styles.hamburger__bar,
    styles['hamburger__bar-middle'],
    {
      [styles['hamburger__bar-white']]: isOpen,
    }
  )
  const hamburgerBottomBarClasses = classnames(
    styles.hamburger__bar,
    styles['hamburger__bar-bottom'],
    {
      [styles['hamburger__bar-white']]: isOpen,
    }
  )
  return (
    <div className={hamburgerClasses} onClick={() => toggleHandler()}>
      <span className={hamburgerTopBarClasses}></span>
      <span className={hamburgerMiddleBarClasses}></span>
      <span className={hamburgerBottomBarClasses}></span>
    </div>
  )
}

export default Hamburger
