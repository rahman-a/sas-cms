import React from 'react'
import HeaderContextProvider from '@context/Header-Context'
import { types, Repeater } from 'react-bricks/frontend'

interface HeaderContainerProps {
  isEdit?: boolean
}

const HeaderContainer: types.Brick<HeaderContainerProps> = ({ isEdit }) => (
  <HeaderContextProvider>
    <div style={{ padding: isEdit ? '0.5rem' : 0 }}>
      <Repeater propName='header-wrapper' />
    </div>
  </HeaderContextProvider>
)

HeaderContainer.schema = {
  name: 'header-context',
  label: 'Header Context',
  category: 'Header',
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: types.EmbedProp,
      label: 'Header Brick',
      type: types.SideEditPropType.Relationship,
    },
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
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
