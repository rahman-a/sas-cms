import React from 'react'
import styles from './List.module.scss'
import classnames from 'classnames'
import { types, Repeater } from 'react-bricks/frontend'
import Link from 'next/link'

interface ItemProps {
  isEdit?: boolean
  itemtext: string
  itemlink: string
}

const Item: types.Brick<ItemProps> = ({
  isEdit,
  itemtext,
  itemlink,
  ...rest
}) => {
  const itemClasses = classnames(styles.list__item, {
    'playground__brick--edit': isEdit,
  })
  const itemContentClasses = classnames(styles.list__content, styles.list__link)
  return (
    <li className={itemClasses} {...rest}>
      {itemlink ? (
        <Link href={itemlink || ''}>
          <a className={itemContentClasses}>{itemtext}</a>
        </Link>
      ) : (
        <p className={styles.list__content}>{itemtext}</p>
      )}
      <Repeater propName='nestedlistitemcontainer' />
    </li>
  )
}

Item.schema = {
  name: 'listitemunit',
  label: 'List Item',
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
      name: 'itemtext',
      label: 'Item Text',
      type: types.SideEditPropType.Textarea,
    },
    {
      name: 'itemlink',
      label: 'Item Link',
      type: types.SideEditPropType.Text,
    },
  ],
  repeaterItems: [
    {
      name: 'nestedlistitemcontainer',
      itemLabel: 'Nested List Container',
      itemType: 'nested-listcontainer',
    },
  ],
}

export default Item
