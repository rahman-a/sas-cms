import React, { useContext, useEffect } from 'react'
import styles from './Tabbed-Navbar.module.scss'
import classnames from 'classnames'
import { TabbedNavbarContext } from '@context/Tabbed-Navbar-Context'
import { types, Image } from 'react-bricks/frontend'

interface TabbedNavbarItemProps {
  activeTabId: string
  isImage: boolean
  labelText: string
  isEdit?: boolean
}

const TabbedNavbarItem: types.Brick<TabbedNavbarItemProps> = ({
  activeTabId,
  isImage,
  labelText,
  isEdit,
  ...rest
}) => {
  const { activeNav, setActiveNav } = useContext(TabbedNavbarContext)
  const tabClasses = classnames(styles.tabs__item, {
    [styles['tabs__item-active']]: activeNav === activeTabId,
    'playground__brick--edit': isEdit,
  })
  const activeTabHandler = () => {
    if (!activeTabId) return
    setActiveNav(activeTabId)
  }
  useEffect(() => {
    if (!activeNav) {
      setActiveNav(activeTabId)
    }
  }, [activeNav])
  return (
    <li className={tabClasses} {...rest}>
      <div onClick={activeTabHandler}>
        {isImage && <Image propName='tabbednavbaritemicon' alt='tab image' />}
        <h3>{labelText}</h3>
      </div>
    </li>
  )
}

TabbedNavbarItem.schema = {
  name: 'tabbednavbaritem',
  label: 'Tabbed Navbar Item',
  category: 'Tabbed Navbar',
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
    {
      name: 'activeTabId',
      label: 'Active Tab Id',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'labelText',
      label: 'Label Text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isImage',
      label: 'Toggle Image',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default TabbedNavbarItem
