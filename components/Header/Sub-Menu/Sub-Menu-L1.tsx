import React, { useEffect, useRef, useContext } from 'react'
import styles from './Sub-Menu.module.scss'
import classNames from 'classnames'
import Locations from '../Locations/Locations'
import locations from '@data/territories.json'
import { HeaderContext } from '@context/Header-Context'
import { types, Repeater } from 'react-bricks/frontend'

interface SubMenuLevelOneProps {
  submenuLevel: number
  submenuLinkId?: string
  isEdit: boolean
}

const SubMenuLevelOne: types.Brick<SubMenuLevelOneProps> = ({
  submenuLevel,
  submenuLinkId,
  isEdit,
  ...rest
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const { setSubNavType, setSubMenuId, setSubMenuLevel } =
    useContext(HeaderContext)
  const showSubMenu = (e: React.SyntheticEvent, type: string): void => {
    setSubNavType(type)
    setSubMenuId((e.target as HTMLAnchorElement).dataset.submenuid)
    setSubMenuLevel(2)
  }

  const navClasses = classNames(
    styles.submenu__level1,
    styles.submenu__is_hidden,
    {
      'playground__brick--edit': isEdit,
    }
  )
  const animationEndHandler = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    submenuLevel === 1
      ? navRef.current?.classList.remove(styles.submenu__is_hidden)
      : submenuLevel === 2 &&
        navRef.current?.classList.add(styles.submenu__is_hidden)
  }

  const addSlideOutAnimation = (): void => {
    timeoutRef.current = setTimeout(() => {
      navRef.current?.classList.remove(styles.submenu__is_hidden)
      navRef.current?.classList.remove(styles['submenu__slideOut-l2'])
      navRef.current?.classList.add(styles['submenu__slideIn-l2'])
    }, 300)
  }

  useEffect(() => {
    if (submenuLevel === 1) {
      addSlideOutAnimation()
    }
    if (submenuLevel === 2) {
      navRef.current?.classList.add(styles['submenu__slideOut-l2'])
    }
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current)
    }
  }, [submenuLevel])
  return (
    <nav
      className={navClasses}
      ref={navRef}
      onAnimationEnd={animationEndHandler}
      data-linkId={submenuLinkId}
      {...rest}
    >
      <div className={styles.submenu__nav}>
        <Repeater
          propName='main-menu-link'
          itemProps={{
            onClick: showSubMenu,
          }}
        />
      </div>
      <Repeater
        propName='locations-list-wrapper'
        itemProps={{
          isMobile: true,
        }}
      />
    </nav>
  )
}

SubMenuLevelOne.schema = {
  name: 'sub-menu-l1',
  label: 'Sub-Menu Level 1',
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
    {
      name: 'submenuLinkId',
      label: 'Submenu Link ID',
      type: types.SideEditPropType.Text,
    },
  ],
  repeaterItems: [
    {
      name: 'main-menu-link',
      itemType: 'header-link',
      itemLabel: 'Header Link',
      max: 5,
    },
    {
      name: 'locations-list-wrapper',
      itemLabel: 'Locations List',
      itemType: 'locations-dropdown',
      max: 1,
    },
  ],
}

export default SubMenuLevelOne
