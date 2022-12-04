import React from 'react'
import styles from './List.module.scss'
import classnames from 'classnames'
import { types, Repeater } from 'react-bricks/frontend'

interface ListProps {
  isEdit?: boolean
}
const List: types.Brick<ListProps> = ({ isEdit, ...rest }) => {
  const listClasses = classnames(styles.list, {
    'playground__brick--edit': isEdit,
  })
  return (
    <ul className={listClasses} {...rest}>
      <Repeater propName='nestedlistitemwrapper' />
    </ul>
  )
}

List.schema = {
  name: 'nested-listcontainer',
  label: 'Nested List Container',
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
      name: 'nestedlistitemwrapper',
      itemLabel: 'Nested List Item',
      itemType: 'nested-listitemunit',
    },
  ],
}

export default List
