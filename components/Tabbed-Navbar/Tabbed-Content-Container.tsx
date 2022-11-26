import React, { useContext } from 'react'
import classnames from 'classnames'
import styles from './Tabbed-Navbar.module.scss'
import { TabbedNavbarContext } from '@context/Tabbed-Navbar-Context'
import { types, Repeater } from 'react-bricks/frontend'

interface TabbedNavbarProps {
  tabcontentid?: string
  isEdit?: boolean
}

const TabbedContentContainer: types.Brick<TabbedNavbarProps> = ({
  tabcontentid,
  isEdit,
  ...rest
}) => {
  const { activeNav } = useContext(TabbedNavbarContext)
  const tabContentClasses = classnames(styles.tabs__container, {
    [styles['tabs__container-active']]: tabcontentid === activeNav || isEdit,
    'playground__brick--edit': isEdit,
  })

  return (
    <div className={tabContentClasses} {...rest}>
      <Repeater propName='tabbednavbarcontent' />
    </div>
  )
}

TabbedContentContainer.schema = {
  name: 'tabbednavbarcontentcontainer',
  label: 'Tabbed Content Container',
  category: 'Tabbed Navbar',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'tabcontentid',
      label: 'Tab Content Id',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'tabbednavbarcontent',
      itemLabel: 'Tabbed Content',
      itemType: 'details-section',
    },
  ],
}

export default TabbedContentContainer
