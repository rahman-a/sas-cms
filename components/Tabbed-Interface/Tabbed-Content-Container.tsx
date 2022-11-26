import React from 'react'
import styles from './Tabbed-Interface.module.scss'
import { types, Repeater } from 'react-bricks/frontend'
import classnames from 'classnames'

interface TabbedContentContainerProps {
  isEdit?: boolean
}

const TabbedContentContainer: types.Brick<TabbedContentContainerProps> = ({
  isEdit,
  ...rest
}) => {
  const tabColumnClasses = classnames(styles.tab__col, {
    'playground__brick--edit': isEdit,
  })
  return (
    <div className={tabColumnClasses} {...rest}>
      <Repeater propName='tabcontentwrapper' />
    </div>
  )
}

TabbedContentContainer.schema = {
  name: 'tabbedcontentcontainer',
  label: 'Tab Content Container',
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
      name: 'tabcontentwrapper',
      itemLabel: 'Tab Content',
      itemType: 'tabbedcontent',
      max: 10,
    },
  ],
}

export default TabbedContentContainer
