import Link from 'next/link'
import styles from './Footer.module.scss'
import React from 'react'
import classnames from 'classnames'

import { types, Text } from 'react-bricks/frontend'

interface FooterLinkProps {
  link: string
  isEdit?: boolean
}

const FooterLink: types.Brick<FooterLinkProps> = ({
  link,
  isEdit,
  ...rest
}) => {
  const linkClasses = isEdit ? styles.footer__edit : ''
  return (
    <span {...rest}>
      <Text
        propName='footer link'
        placeholder='type link text...'
        renderBlock={({ children }) => (
          <Link href={link || ''}>
            <a className={linkClasses}>{children}</a>
          </Link>
        )}
      />
    </span>
  )
}

FooterLink.schema = {
  name: 'footer-link',
  label: 'Footer link',
  category: 'Footer',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: 'link',
      label: 'Link URL',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default FooterLink
