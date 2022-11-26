import React, { useContext, useEffect } from 'react'
import styles from './Tabbed-Interface.module.scss'
import { types } from 'react-bricks/frontend'
import classnames from 'classnames'
import { TabbedInterfaceContext } from '@context/Tabbed-Interface-Context'

interface TabbedItemProps {
  linkId?: string
  tabTitle?: string
  isEdit?: boolean
}

const TabbedItem: types.Brick<TabbedItemProps> = ({
  linkId,
  tabTitle,
  isEdit,
  ...rest
}) => {
  const { activeTab, setActiveTab } = useContext(TabbedInterfaceContext)
  const tabItemClasses = classnames(styles.tab__item, {
    [styles.tab__item_active]: activeTab === linkId,
    'playground__brick--edit': isEdit,
  })
  const activeTabHandler = () => {
    if (!linkId) return
    setActiveTab(linkId)
  }

  useEffect(() => {
    console.log('activeTab: ', activeTab)
    if (!activeTab) {
      setActiveTab(linkId)
    }
  }, [activeTab])
  return (
    <li {...rest} className={tabItemClasses}>
      <div onClick={activeTabHandler}>{tabTitle}</div>
    </li>
  )
}

TabbedItem.schema = {
  name: 'tabbedlistitem',
  label: 'Tabbed List Item',
  category: 'Tabbed Interface',
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
      name: 'linkId',
      label: 'Link List to Tab Id',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'tabTitle',
      label: 'Tab Title',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default TabbedItem
