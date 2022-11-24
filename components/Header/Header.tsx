import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './Header.module.scss'
import DropdownMenu from './Dropdown-Menu/Dropdown-Menu'
import { HeaderContext } from '@context/Header-Context'
import data from '@data/data.json'
import { types, Repeater } from 'react-bricks/frontend'

const Header: types.Brick = ({ ...rest }) => {
  const { subNavType, isOpen, isDropdownOpen } = useContext(HeaderContext)
  const router = useRouter()
  const headerClasses = classNames(styles.header, {
    [styles.header__separator]: isOpen,
    [styles.header__overlay]: isOpen && subNavType === 'search',
    [styles.header__dropdown]: isDropdownOpen,
  })

  return (
    <header className={headerClasses} {...rest}>
      <div className='container'>
        <div className={styles.header__wrapper}>
          {!isOpen && <Repeater propName='header-logo-wrapper' />}
          {isOpen && <Repeater propName='header-logo-white-wrapper' />}
          <Repeater propName='header-navbar-wrapper' />
          <Repeater propName='header-option-wrapper' />
        </div>
      </div>
      <Repeater propName='header-dropdown-wrapper' />
    </header>
  )
}

/* {router.pathname !== '/' && <Breadcrumbs isOpen={isOpen} />} */

Header.schema = {
  name: 'header',
  label: 'Header',
  category: 'Header',
  hideFromAddMenu: true,
  repeaterItems: [
    {
      name: 'header-logo-wrapper',
      itemLabel: 'Header Logo',
      itemType: 'header-logo',
      max: 1,
    },
    {
      name: 'header-logo-white-wrapper',
      itemLabel: 'Header Logo White',
      itemType: 'header-logo',
      max: 1,
    },
    {
      name: 'header-navbar-wrapper',
      itemLabel: 'Header Navbar',
      itemType: 'header-navbar',
      max: 1,
    },
    {
      name: 'header-option-wrapper',
      itemLabel: 'Header Option',
      itemType: 'header-option',
      max: 1,
    },
    {
      name: 'header-dropdown-wrapper',
      itemLabel: 'Header Dropdown',
      itemType: 'dropdown-menu',
      max: 1,
    },
  ],
}

export default Header
