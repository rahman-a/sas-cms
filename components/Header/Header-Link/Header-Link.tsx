import React, { useEffect } from 'react'
import styles from '../Navbar/Navbar.module.scss'
import classnames from 'classnames'
import { types, Text } from 'react-bricks/frontend'
import { RightArrow } from '@components/icons'
import Link from 'next/link'

interface HeaderLinkProps {
  isOpen: boolean
  isMobile: boolean
  linkText: string
  isEdit: boolean
  hasSubMenu: boolean
  submenuLinkId: string
  className?: string
  linkURL?: string
  onClick: (e: React.SyntheticEvent, text: string) => void
}

const HeaderLink: types.Brick<HeaderLinkProps> = ({
  isOpen,
  isMobile,
  linkText,
  isEdit,
  linkURL,
  submenuLinkId,
  hasSubMenu,
  className,
  onClick,
  ...rest
}) => {
  const linkClasses = classnames(styles.navbar__link, {
    [styles.navbar__link_white]: isOpen,
    [className as string]: className,
    'playground__brick--edit': isEdit,
  })

  const onClickHandler = (e: React.SyntheticEvent, text: string) => {
    if (isEdit) return
    onClick && onClick(e, text)
  }
  return (
    <span {...rest}>
      <Link href={linkURL || ''}>
        <a
          className={linkClasses}
          onClick={(e) => {
            onClickHandler(e, linkText)
          }}
          data-type={linkText}
          data-submenuid={submenuLinkId}
          data-issubmenu={hasSubMenu || false}
        >
          {linkText}
          {(isMobile || hasSubMenu) && (
            <span>
              <RightArrow />
            </span>
          )}
        </a>
      </Link>
    </span>
  )
}

HeaderLink.schema = {
  name: 'header-link',
  label: 'Header Link',
  category: 'Header',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'linkText',
      label: 'Type link text...',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'linkURL',
      label: 'Link URL',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'hasSubMenu',
      label: 'Has submenu?',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'submenuLinkId',
      label: 'Submenu Link ID',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HeaderLink
