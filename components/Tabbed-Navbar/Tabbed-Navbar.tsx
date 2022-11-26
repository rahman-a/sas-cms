import React from 'react'
import styles from './Tabbed-Navbar.module.scss'
import { types, Repeater } from 'react-bricks/frontend'
import classnames from 'classnames'

interface TabbedNavbarProps {
  isEdit?: boolean
}

const TabbedNavbar: types.Brick<TabbedNavbarProps> = ({ isEdit }) => {
  const tabsClasses = classnames(styles.tabs, {
    'playground__brick--edit': isEdit,
  })
  return (
    <div className={tabsClasses}>
      <div className={styles.tabs__wrapper}>
        <ul className={styles.tabs__header}>
          <Repeater propName='tabbednavbaritemwrapper' />
        </ul>
        <div className={styles.tabs__content}>
          <Repeater propName='tabbednavbarcontentwrapper' />
        </div>
      </div>
    </div>
  )
}
TabbedNavbar.schema = {
  name: 'tabbednavbar',
  label: 'Tabbed Navbar',
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
  ],
  repeaterItems: [
    {
      name: 'tabbednavbaritemwrapper',
      itemLabel: 'Tab Item',
      itemType: 'tabbednavbaritem',
    },
    {
      name: 'tabbednavbarcontentwrapper',
      itemLabel: 'Tab Content',
      itemType: 'tabbednavbarcontentcontainer',
    },
  ],
}

export default TabbedNavbar
