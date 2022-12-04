import React from 'react'
import styles from './Sitemap.module.scss'
import { types, Repeater } from 'react-bricks/frontend'

interface SitemapProps {
  isEdit?: boolean
}

const Sitemap: types.Brick<SitemapProps> = ({ isEdit, ...rest }) => {
  return (
    <div
      className={`${styles.map} ${isEdit ? 'playground__brick--edit' : ''}`}
      {...rest}
    >
      <div className={styles.map__content}>
        <div className={styles.map__row}>
          <Repeater propName='columns' />
        </div>
      </div>
    </div>
  )
}

Sitemap.schema = {
  name: 'sitemap',
  label: 'Sitemap',
  category: 'Sitemap',
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
      name: 'columns',
      itemLabel: 'Sitemap Column',
      itemType: 'sitemap-column',
    },
  ],
}

export default Sitemap
