import React, { useContext } from 'react'
import { HeaderContext } from '@context/Header-Context'
import NavOverlay from '../Nav-Overlay/Nav-Overlay'
import { types, Repeater } from 'react-bricks/frontend'

const DropdownMenu: types.Brick = ({ ...rest }) => {
  const { subNavType, isOpen } = useContext(HeaderContext)
  let dropdownContent = null
  if (isOpen) {
    dropdownContent =
      subNavType === 'search' ? (
        <Repeater propName='header-search-repeater' />
      ) : (
        <Repeater propName='header-sub-menu-repeater' />
      )
  }
  return <NavOverlay {...rest}>{dropdownContent}</NavOverlay>
}

DropdownMenu.schema = {
  name: 'dropdown-menu',
  label: 'Header Dropdown Menu',
  category: 'Header',
  repeaterItems: [
    {
      name: 'header-search-repeater',
      itemLabel: 'Header Search',
      itemType: 'header-search',
      max: 1,
    },
    {
      name: 'header-sub-menu-repeater',
      itemLabel: 'Header Sub Menu',
      itemType: 'header-sub-menu',
      max: 1,
    },
  ],
}

export default DropdownMenu
