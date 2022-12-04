import Link from 'next/link'
import React from 'react'
import styles from './Sitemap.module.scss'
import { types } from 'react-bricks/frontend'

interface SitemapLinkProps {
  link: string
  text: string
  isEdit?: boolean
}
const SitemapLink: types.Brick<SitemapLinkProps> = ({
  link,
  text,
  isEdit,
  ...rest
}) => {
  return (
    <li
      {...rest}
      className={`${styles.map__item} ${
        isEdit ? 'playground__brick--edit' : ''
      }`}
    >
      <Link href={link || ''}>
        <a className={styles.map__link}>{text}</a>
      </Link>
    </li>
  )
}

SitemapLink.schema = {
  name: 'sitemap-link',
  label: 'Sitemap Link',
  category: 'Sitemap',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'text',
      label: 'Page Name',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'link',
      label: 'Page Link',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default SitemapLink
