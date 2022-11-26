import React from 'react'
import styles from './Tabbed-Interface.module.scss'
import { types, Repeater } from 'react-bricks/frontend'
import classnames from 'classnames'

interface TabbedTabsContainerProps {
  isEdit?: boolean
}

const TabbedTabsContainer: types.Brick<TabbedTabsContainerProps> = ({
  isEdit,
  ...rest
}) => {
  const tabColumnClasses = classnames(styles.tab__col, {
    'playground__brick--edit': isEdit,
  })
  return (
    <div className={tabColumnClasses} {...rest}>
      <ul className={styles.tab__list}>
        <Repeater propName='tabbedlistitemwrapper' />
      </ul>
    </div>
  )
}

TabbedTabsContainer.schema = {
  name: 'tabbedtabscontainer',
  label: 'Tabs Container',
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
  ],
  repeaterItems: [
    {
      name: 'tabbedlistitemwrapper',
      itemLabel: 'Tabbed List Item',
      itemType: 'tabbedlistitem',
      max: 10,
    },
  ],
}

export default TabbedTabsContainer
