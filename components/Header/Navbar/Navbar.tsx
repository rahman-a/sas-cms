import React, { useState, useContext, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './Navbar.module.scss'
import { HeaderContext } from '@context/Header-Context'
import { Repeater, types } from 'react-bricks/frontend'

interface NavbarProps {
  isMobile?: boolean
  isEdit?: boolean
}

const Navbar: types.Brick<NavbarProps> = ({ isMobile, isEdit, ...rest }) => {
  const {
    isOpen,
    setIsOpen,
    setSubNavType,
    subNavType,
    setSubMenuId,
    setSubMenuLevel,
  } = useContext(HeaderContext)
  const selectedElement = useRef<HTMLAnchorElement>()
  const [anchorElement, setAnchorElement] = useState<HTMLAnchorElement>()

  const showSubNav = (e: React.SyntheticEvent, type: string): void => {
    if (
      isOpen &&
      !isMobile &&
      (e.target as HTMLAnchorElement).dataset.type === subNavType
    ) {
      setSubNavType('')
      setSubMenuId('')
      selectedElement.current = undefined
      setAnchorElement(undefined)
      setIsOpen(false)
      return
    }
    setIsOpen(true)
    setSubNavType(type)
    setSubMenuId((e.target as HTMLAnchorElement).dataset.submenuid)
    setSubMenuLevel(2)
    if (selectedElement?.current) {
      selectedElement.current.classList.remove(styles.navbar__link_active)
    }
    selectedElement.current = e.currentTarget as HTMLAnchorElement
    setAnchorElement(e.currentTarget as HTMLAnchorElement)
  }

  const navClasses = classNames(styles.navbar, {
    [styles.navbar__hidden]: isOpen && subNavType === 'search',
    [styles['navbar__is_mobile']]: isMobile,
    'playground__brick--edit': isEdit,
  })

  useEffect(() => {
    anchorElement && anchorElement.classList.add(styles.navbar__link_active)
    return () => setAnchorElement(undefined)
  }, [anchorElement])

  return (
    <nav className={navClasses} {...rest}>
      <Repeater
        propName='main-menu-link'
        itemProps={{
          isOpen,
          isMobile,
          onClick: showSubNav,
        }}
      />
    </nav>
  )
}

Navbar.schema = {
  name: 'header-navbar',
  label: 'Header Navbar',
  category: 'Header',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'main-menu-link',
      itemType: 'header-link',
      itemLabel: 'Header Link',
      max: 5,
    },
  ],
}

export default Navbar
