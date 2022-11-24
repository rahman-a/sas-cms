import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { Repeater, types } from 'react-bricks/frontend'
import styles from './Sub-Menu.module.scss'
import { HeaderContext } from '@context/Header-Context'

interface SubMenuProps {
  isEdit?: boolean
}

const SubMenu: types.Brick<SubMenuProps> = ({ isEdit, ...rest }) => {
  const {
    subNavType,
    subMenuLevel,
    setSubMenuLevel,
    subMenuId,
    setIsOpen,
    isOpen,
  } = useContext(HeaderContext)
  const router = useRouter()

  const submenuClasses = classnames(styles.submenu, {
    'playground__brick--edit': isEdit,
  })

  const menuSubLevel3Handler = (level: number): void => {
    setSubMenuLevel(level)
  }

  return (
    <div className={submenuClasses} {...rest}>
      <div className={styles.submenu__content}>
        <Repeater
          propName='header-sub-menu-l1'
          itemProps={{
            submenuLevel: subMenuLevel,
          }}
        />
        {subNavType && (
          <Repeater
            propName='header-sub-menu-l2'
            itemProps={{
              menuSubLevel3Handler: menuSubLevel3Handler,
              submenuLevel: subMenuLevel,
              setIsOpen: setIsOpen,
              submenuLinkId: subMenuId,
            }}
          />
        )}
        <Repeater
          propName='header-sub-menu-l3'
          itemProps={{
            submenuLevel: subMenuLevel,
            setIsOpen: setIsOpen,
          }}
        />
        <div className={styles.submenu__featured}>
          <Repeater propName='featured-posts-wrapper' />
        </div>
      </div>
    </div>
  )
}

SubMenu.schema = {
  name: 'header-sub-menu',
  label: 'Header Sub Menu',
  category: 'Header',
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
      name: 'header-sub-menu-l1',
      itemLabel: 'Header Sub Menu Level 1',
      itemType: 'sub-menu-l1',
      max: 1,
    },
    {
      name: 'header-sub-menu-l2',
      itemLabel: 'Header Sub Menu Level 2',
      itemType: 'sub-menu-l2',
      max: 5,
    },
    {
      name: 'header-sub-menu-l3',
      itemLabel: 'Header Sub Menu Level 3',
      itemType: 'sub-menu-l3',
    },
    {
      name: 'featured-posts-wrapper',
      itemLabel: 'Header Featured Posts',
      itemType: 'featured-posts',
      max: 5,
    },
  ],
}

export default SubMenu
