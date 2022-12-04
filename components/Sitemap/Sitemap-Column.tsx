import React from 'react'
import styles from './Sitemap.module.scss'
import Link from 'next/link'
import { types, Repeater } from 'react-bricks/frontend'

interface SitemapColumnProps {
  title: string
  link: string
  isEdit?: boolean
}

const SitemapColumn: types.Brick<SitemapColumnProps> = ({
  title,
  link,
  isEdit,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`${styles.map__col} ${
        isEdit ? 'playground__brick--edit' : ''
      }`}
    >
      <Link href={link || ''}>
        <a className={styles.map__header}>{title}</a>
      </Link>
      <ul className={styles.map__list}>
        <Repeater propName='links' />
      </ul>
    </div>
  )
}

SitemapColumn.schema = {
  name: 'sitemap-column',
  label: 'Sitemap Column',
  category: 'Sitemap',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'title',
      label: 'Category Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'link',
      label: 'Category Link',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'links',
      itemLabel: 'Page Link',
      itemType: 'sitemap-link',
    },
  ],
}

export default SitemapColumn
