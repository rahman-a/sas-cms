import React, { useEffect, useRef, useContext } from 'react'
import { useRouter } from 'next/router'
import styles from './Sub-Menu.module.scss'
import classnames from 'classnames'
import { types, Repeater } from 'react-bricks/frontend'
import { NavBackButton } from '@components/ui'
import { HeaderContext } from '@context/Header-Context'

interface SubMenuLevel2Props {
  menuSubLevel3Handler: (level: number) => void
  submenuLevel: number
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  submenuLinkId: string
  submenuId: string
  submenuTitle: string
  isEdit?: boolean
  columns?: number
}

const SubMenuLevel2: types.Brick<SubMenuLevel2Props> = ({
  menuSubLevel3Handler,
  submenuLevel,
  setIsOpen,
  isEdit,
  submenuTitle,
  submenuLinkId,
  submenuId,
  columns,
  ...rest
}) => {
  const router = useRouter()
  const navRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { setSubMenuL3Id } = useContext(HeaderContext)
  const navClasses = classnames(styles.submenu__items, {
    [styles['submenu__items-c1']]: Number(columns) === 1,
    [styles['submenu__items-c2']]: Number(columns) === 2,
    [styles['submenu__items-c3']]: Number(columns) === 3,
  })
  const wrapperClasses = classnames(
    styles.submenu__wrapper,
    styles.submenu__is_hidden,
    {
      'playground__brick--edit': isEdit,
    }
  )

  const animationEndHandler = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    submenuLevel === 2 &&
      navRef.current?.classList.remove(styles.submenu__is_hidden)
    submenuLevel === 3 &&
      navRef.current?.classList.add(styles.submenu__is_hidden)
  }

  const handleNavigation = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if ((e.target as HTMLAnchorElement).dataset.issubmenu === 'true') {
      menuSubLevel3Handler(3)
      setSubMenuL3Id((e.target as HTMLAnchorElement).dataset.submenuid)
      navRef.current?.classList.add(styles['submenu__slideOut-l2'])
      return
    }
    router.push((e.currentTarget as HTMLAnchorElement).href)
    setIsOpen(false)
  }

  const titleClasses = classnames({
    [styles['submenu__slideIn-l2']]: submenuLevel === 2,
    [styles['submenu__slideOut-l2']]: submenuLevel !== 2,
  })

  const addSlideInAnimation = (): void => {
    timeoutRef.current = setTimeout(() => {
      navRef.current?.classList.remove(styles.submenu__is_hidden)
      navRef.current?.classList.remove(styles['submenu__slideOut-l2'])
      navRef.current?.classList.add(styles['submenu__slideIn-l2'])
      btnRef.current?.classList.add(styles['submenu__back-visible'])
    }, 300)
  }

  const addSlideOutAnimation = (): void => {
    navRef.current?.classList.add(styles['submenu__slideOut-l2'])
    navRef.current?.classList.remove(styles['submenu__slideIn-l2'])
    timeoutRef.current = setTimeout(() => {
      navRef.current?.classList.add(styles.submenu__is_hidden)
    }, 300)
  }

  useEffect(() => {
    if (submenuLinkId !== navRef.current?.dataset.linkid && !isEdit) {
      navRef.current && (navRef.current.style.display = 'none')
    } else {
      navRef.current && (navRef.current.style.display = 'block')
    }
  }, [submenuLinkId, submenuId])

  useEffect(() => {
    if (submenuLevel === 2) {
      addSlideInAnimation()
    } else {
      btnRef.current?.classList.remove(styles['submenu__back-visible'])
    }
    if (submenuLevel === 1) {
      addSlideOutAnimation()
    }
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current)
    }
  }, [submenuLevel])
  return (
    <div
      className={wrapperClasses}
      ref={navRef}
      onAnimationEnd={animationEndHandler}
      data-linkid={submenuId}
      {...rest}
    >
      <h2 className={titleClasses}>{submenuTitle}</h2>
      <NavBackButton
        text='Menu'
        className={styles.submenu__backl2}
        ref={btnRef}
        backHandler={() => menuSubLevel3Handler(1)}
        l2={true}
      />
      <nav className={navClasses}>
        <Repeater
          propName='main-menu-link'
          itemProps={{
            className: styles.submenu__item,
            onClick: handleNavigation,
          }}
        />
      </nav>
    </div>
  )
}

SubMenuLevel2.schema = {
  name: 'sub-menu-l2',
  label: 'Sub Menu Level 2',
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
      name: 'submenuId',
      label: 'Submenu Id',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'submenuTitle',
      label: 'Submenu Title',
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

export default SubMenuLevel2
