import React, { useContext } from 'react'
import styles from './Nav-Overlay.module.scss'
import { HeaderContext } from '@context/Header-Context'
import { Close } from '@components/icons'
import classNames from 'classnames'

type NavOverlayProps = {
  children: JSX.Element | JSX.Element[] | null
}

const NavOverlay: React.FC<NavOverlayProps> = ({ children, ...rest }) => {
  const { isOpen, setIsOpen, setSubNavType, subNavType } =
    useContext(HeaderContext)

  const closeNavOverlayHandler = (): void => {
    setIsOpen(false)
    setSubNavType('')
  }

  const overlayClasses = classNames(styles.overlay, {
    [styles.overlay__show]: isOpen,
  })

  const wrapperClasses = classNames(styles.overlay__wrapper, {
    [styles.overlay__wrapper_space]: isOpen,
  })

  const closeClasses = classNames(styles.overlay__close, {
    [styles.overlay__close_search]: isOpen && subNavType === 'search',
  })
  return (
    <div className={overlayClasses} {...rest}>
      <span className={closeClasses} onClick={closeNavOverlayHandler}>
        <Close />
      </span>
      <div className={wrapperClasses}>{children}</div>
    </div>
  )
}

export default NavOverlay
