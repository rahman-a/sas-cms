import React, { useEffect, useRef, useContext } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './Sub-Menu.module.scss'
import { MenuItem } from '@customTypes/Menu'
import { HeaderContext } from '@context/Header-Context'
import { NavBackButton } from '@components/ui'
import { Repeater, types } from 'react-bricks/frontend'

interface SubMenuLevelThreeProps {
  submenuLevel: number
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isEdit?: boolean
  columns?: number
  submenuLinkId?: string
}

const SubMenuLevelThree: types.Brick<SubMenuLevelThreeProps> = ({
  submenuLevel,
  isEdit,
  setIsOpen,
  columns,
  submenuLinkId,
  ...rest
}) => {
  const navRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { setSubMenuLevel, subNavType, subMenuL3Id } = useContext(HeaderContext)
  const router = useRouter()
  const navClasses = classNames(styles.submenu__items, {
    [styles['submenu__items-c1']]: Number(columns) === 1,
    [styles['submenu__items-c2']]: Number(columns) === 2,
    [styles['submenu__items-c3']]: Number(columns) === 3,
  })

  const linkClasses = classNames(
    styles.submenu__item,
    styles['submenu__item-l3']
  )

  const wrapperClasses = classNames(
    styles.submenu__wrapper,
    styles.submenu__is_hidden,
    {
      'playground__brick--edit': isEdit,
    }
  )

  const handleNavigation = (link: string) => {
    router.push(link)
    setIsOpen(false)
  }

  const addSlideInAnimation = (): void => {
    navRef.current?.classList.remove(styles['submenu__slideOut-l3'])
    navRef.current?.classList.add(styles['submenu__slideIn-l3'])
    timeoutRef.current = setTimeout(() => {
      navRef.current?.classList.remove(styles.submenu__is_hidden)
      btnRef.current?.classList.add(styles['submenu__back-visible'])
    }, 300)
  }

  const addSlideOutAnimation = (): void => {
    navRef.current?.classList.remove(styles['submenu__slideIn-l3'])
    navRef.current?.classList.add(styles['submenu__slideOut-l3'])
    timeoutRef.current = setTimeout(() => {
      navRef.current?.classList.add(styles.submenu__is_hidden)
      btnRef.current?.classList.remove(styles['submenu__back-visible'])
    }, 300)
  }

  useEffect(() => {
    if (subMenuL3Id !== navRef.current?.dataset.linkid && !isEdit) {
      navRef.current && (navRef.current.style.display = 'none')
    } else {
      navRef.current && (navRef.current.style.display = 'block')
    }
  }, [subMenuL3Id, submenuLinkId])

  useEffect(() => {
    if (submenuLevel === 3) {
      addSlideInAnimation()
    }
    if (submenuLevel === 2) {
      addSlideOutAnimation()
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [submenuLevel])

  return (
    <div
      className={wrapperClasses}
      ref={navRef}
      data-linkId={submenuLinkId}
      {...rest}
    >
      <NavBackButton
        text={subNavType}
        ref={btnRef}
        backHandler={() => setSubMenuLevel(2)}
      />
      <nav className={navClasses}>
        <Repeater
          propName='main-menu-link'
          itemProps={{
            className: linkClasses,
            onClick: handleNavigation,
          }}
        />
      </nav>
    </div>
  )
}

SubMenuLevelThree.schema = {
  name: 'sub-menu-l3',
  label: 'Sub Menu Level 3',
  category: 'Header',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isEdit: true,
    columns: 3,
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
    {
      name: 'columns',
      label: 'columns Number',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 1, label: 'One Columns' },
          { value: 2, label: 'Two columns' },
          { value: 3, label: 'Three columns' },
        ],
      },
    },
  ],
  repeaterItems: [
    {
      name: 'main-menu-link',
      itemType: 'header-link',
      itemLabel: 'Header Link',
      max: 25,
    },
  ],
}

export default SubMenuLevelThree
