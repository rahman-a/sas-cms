import React from 'react'
import styles from './Tabbed-Interface.module.scss'
import classnames from 'classnames'
import { Repeater, types } from 'react-bricks/frontend'

interface TabbedInterfaceProps {
  isEdit?: boolean
}

const TabbedInterface: types.Brick<TabbedInterfaceProps> = ({
  isEdit,
  ...rest
}) => {
  const tabClasses = classnames(styles.tab, {
    'playground__brick--edit': isEdit,
  })
  return (
    <div className={tabClasses} {...rest}>
      <Repeater propName='tabtitlewrapper' />
      <div className={styles.tab__wrapper}>
        <Repeater propName='tabscontainerwrapper' />
        <div className={styles.tab__separator}></div>
        <Repeater propName='contentcontainerwrapper' />
      </div>
    </div>
  )
}

TabbedInterface.schema = {
  name: 'tabbedinterface',
  label: 'Tabbed Interface',
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
      name: 'tabtitlewrapper',
      itemLabel: 'Tab Title',
      itemType: 'header-text',
    },
    {
      name: 'tabscontainerwrapper',
      itemLabel: 'Tabs Container',
      itemType: 'tabbedtabscontainer',
      max: 2,
    },
    {
      name: 'contentcontainerwrapper',
      itemLabel: 'Content Container',
      itemType: 'tabbedcontentcontainer',
      max: 2,
    },
  ],
}

export default TabbedInterface
