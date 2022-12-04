import React from 'react'
import Link from 'next/link'
import styles from './List.module.scss'
import classnames from 'classnames'
import { types } from 'react-bricks/frontend'
interface ItemProps {
  text?: string
  link?: string
  isEdit?: boolean
}

const Item: types.Brick<ItemProps> = ({ text, link, isEdit, ...rest }) => {
  const itemClasses = classnames(styles.list__item, {
    'playground__brick--edit': isEdit,
  })
  return (
    <li className={itemClasses} {...rest}>
      <Link href={link || ''}>
        <a className={styles.list__link}>{text}</a>
      </Link>
    </li>
  )
}

Item.schema = {
  name: 'flat-item',
  label: 'Flat Item',
  category: 'UI',
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
      name: 'text',
      label: 'Item Text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'link',
      label: 'Item Link',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default Item
