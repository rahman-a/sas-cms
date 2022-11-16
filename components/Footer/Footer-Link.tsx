import Link from 'next/link'
import React, { Fragment } from 'react'

import { types, Text } from 'react-bricks/frontend'

interface FooterLinkProps {
  link: string
}

const FooterLink: types.Brick<FooterLinkProps> = ({ link, ...rest }) => {
  return (
    <span {...rest}>
      <Text
        propName='footer link'
        placeholder='type link text...'
        renderBlock={({ children }) => (
          <Link href={link || ''}>
            <a>{children}</a>
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
  ],
}

export default FooterLink
