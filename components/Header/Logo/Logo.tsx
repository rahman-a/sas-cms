import React, { useContext } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import styles from './Logo.module.scss'
import { HeaderContext } from '@context/Header-Context'
import { types, Image } from 'react-bricks/frontend'

interface LogoProps {
  link: string
}

const Logo: types.Brick<LogoProps> = ({ link, ...rest }) => {
  const { isDropdownOpen } = useContext(HeaderContext)

  const logoClasses = classnames(styles.logo, {
    [styles.logo__hidden]: isDropdownOpen,
  })

  return (
    <figure className={logoClasses} {...rest}>
      <Image
        propName='logo-image'
        alt='logo'
        renderWrapper={({ children }) => (
          <Link href={link || ''}>
            <a>{children}</a>
          </Link>
        )}
      />
    </figure>
  )
}

Logo.schema = {
  name: 'header-logo',
  label: 'Header Logo',
  category: 'Header',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: 'link',
      label: 'Logo Link',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default Logo
