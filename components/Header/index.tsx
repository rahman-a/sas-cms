import React from 'react'
import HeaderContextProvider from '@context/Header-Context'
import { types, Repeater } from 'react-bricks/frontend'

const HeaderContainer: types.Brick = () => (
  <HeaderContextProvider>
    <Repeater propName='header-wrapper' />
  </HeaderContextProvider>
)

HeaderContainer.schema = {
  name: 'header-context',
  label: 'Header Context',
  category: 'Header',
  repeaterItems: [
    {
      name: 'header-wrapper',
      itemLabel: 'Header',
      itemType: 'header',
      max: 1,
    },
  ],
}

export default HeaderContainer
