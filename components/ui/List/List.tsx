import React from 'react'
import styles from './List.module.scss'
import classnames from 'classnames'
import { types, Repeater } from 'react-bricks/frontend'

interface ListProps {
  isEdit?: boolean
}
const List: types.Brick<ListProps> = ({ isEdit }) => {
  const listClasses = classnames(styles.list, {
    'playground__brick--edit': isEdit,
  })
  return (
    <ul className={listClasses}>
      <Repeater propName='listitemwrapper' />
    </ul>
  )
}

List.schema = {
  name: 'listcontainer',
  label: 'List Container',
  category: 'UI',
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
      name: 'listitemwrapper',
      itemLabel: 'List Item',
      itemType: 'listitemunit',
    },
  ],
}

export default List
