import React from 'react'
import styles from './List.module.scss'
import classnames from 'classnames'
import { types } from 'react-bricks/frontend'

interface ItemProps {
  isEdit?: boolean
  title?: string
  content?: string
}

const Item: types.Brick<ItemProps> = ({ isEdit, title, content, ...rest }) => {
  const itemClasses = classnames(styles.list__item, {
    'playground__brick--edit': isEdit,
  })
  return (
    <details className={itemClasses} {...rest}>
      <summary className={styles.list__summary}>{title}</summary>
      <p className={styles.list__content}>{content}</p>
    </details>
  )
}

Item.schema = {
  name: 'details-item',
  label: 'Details Item',
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
      name: 'title',
      label: 'Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'content',
      label: 'Content',
      type: types.SideEditPropType.Textarea,
    },
  ],
}

export default Item
