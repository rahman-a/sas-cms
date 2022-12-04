import React from 'react'
import styles from './Float-Page-Index.module.scss'
import { types } from 'react-bricks/frontend'
import classnames from 'classnames'
import Link from 'next/link'
interface ItemProps {
  selectedUrl: string
  title?: string
  url?: string
  selectIndexHandler: (url: string) => void
  isEdit?: boolean
}

const Item: types.Brick<ItemProps> = ({
  selectedUrl,
  title,
  url,
  isEdit,
  selectIndexHandler,
  ...rest
}) => {
  const itemClasses = classnames(styles.index__item, {
    [styles['index__item--selected']]: selectedUrl === url,
    'playground__brick--edit': isEdit,
  })
  return (
    <li className={itemClasses} {...rest}>
      <Link href={`#${url}`}>
        <a
          className={styles.index__link}
          onClick={() => selectIndexHandler(url)}
        >
          <span>{title}</span>
        </a>
      </Link>
    </li>
  )
}

Item.schema = {
  name: 'float-page-index-item',
  label: 'Float Page Index Item',
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
      name: 'title',
      label: 'Index Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'url',
      label: 'Index URL',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default Item
