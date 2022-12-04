import React from 'react'
import styles from './List.module.scss'
import classnames from 'classnames'
import { types, Repeater } from 'react-bricks/frontend'

interface ListProps {
  isEdit?: boolean
  isBorderTop?: boolean
}
const List: types.Brick<ListProps> = ({ isEdit, isBorderTop, ...rest }) => {
  const listClasses = classnames(styles.list, {
    'playground__brick--edit': isEdit,
    [styles['list__borderTop']]: isBorderTop,
  })
  return (
    <ul className={listClasses} {...rest}>
      <Repeater propName='itemwrapper' />
    </ul>
  )
}

List.schema = {
  name: 'flat-list',
  label: 'Flat List',
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
    {
      name: 'isBorderTop',
      label: 'Set Border Top',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'itemwrapper',
      itemLabel: 'Item',
      itemType: 'flat-item',
    },
  ],
}

export default List
