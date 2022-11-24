import Link from 'next/link'
import React, { useEffect } from 'react'
import { types } from 'react-bricks/frontend'
import classnames from 'classnames'
import styles from './Dropdown-Menu.module.scss'

interface ListItemProps {
  link?: string
  text?: string
  isGlobal?: boolean
  searchItem?: string
  collectVisibilitySignals?: (state: boolean) => void
}

const ListItem: types.Brick<ListItemProps> = ({
  link,
  text,
  isGlobal,
  searchItem,
  collectVisibilitySignals,
  ...rest
}) => {
  const [isItemVisible, setIsItemVisible] = React.useState<boolean>(true)
  const itemClasses = classnames(styles.dropdown__item, {
    [styles['dropdown__item-global']]: isGlobal,
    [styles['dropdown__item-hidden']]: !isItemVisible,
  })

  const toggleItemVisibility = () => {
    if (!searchItem) {
      setIsItemVisible(true)
      return
    }
    if (text.toLowerCase().includes(searchItem.toLowerCase())) {
      setIsItemVisible(true)
      collectVisibilitySignals(true)
      return
    }
    setIsItemVisible(false)
    collectVisibilitySignals(false)
  }

  useEffect(() => {
    toggleItemVisibility()
  }, [searchItem])
  return (
    <li className={itemClasses} {...rest}>
      <Link href={link || ''}>
        <a className={styles.dropdown__link}>{text}</a>
      </Link>
    </li>
  )
}

ListItem.schema = {
  name: 'ui-dropdown-list-item',
  label: 'Dropdown List Item',
  category: 'UI',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: 'link',
      label: 'List Item Link',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'text',
      label: 'List Item Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isGlobal',
      label: 'Make Text Bold',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default ListItem
