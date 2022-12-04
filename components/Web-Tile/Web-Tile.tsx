import React from 'react'
import styles from './Web-Tile.module.scss'
import classnames from 'classnames'
import { RightArrow } from '../icons'
import { types, File } from 'react-bricks/frontend'
import Link from 'next/link'

interface WebTileProps {
  title?: string
  heading?: string
  link?: string
  icon?: types.IImageSource
  style?: React.CSSProperties
  isFileSize?: boolean
  className?: string
}

const WebTile: types.Brick<WebTileProps> = ({
  title,
  heading,
  icon,
  link,
  style,
  isFileSize,
  className,
}) => {
  const tileClasses = classnames(styles.tile, {
    [className as string]: className,
  })

  const fileSizeTextRender = (size: number) => {
    if (!isFileSize) return ''
    if (size < 1) return `(PDF ${size} Bytes)`
    if (size < 1024) return `(PDF ${size} KB)`
    if (size < 1024 * 1024) return `(PDF ${(size / 1024).toFixed(2)} MB)`
    if (size < 1024 * 1024 * 1024)
      return `(PDF ${(size / 1024 / 1024).toFixed(2)} GB)`
    return `(PDF ${(size / 1024 / 1024 / 1024).toFixed(2)} TB)`
  }

  if (link) {
    return (
      <div className={tileClasses} style={style}>
        <Link href={link || ''}>
          <a className={styles.tile__wrapper}>
            <div
              className={styles.tile__icon}
              style={{ backgroundImage: `url(${icon.src})` }}
            ></div>
            <div className={styles.tile__content}>
              <p className={styles.tile__title}>{title}</p>
              <h2 className={styles.tile__description}>
                {heading}
                <span>
                  <RightArrow />
                </span>
              </h2>
            </div>
          </a>
        </Link>
      </div>
    )
  }
  return (
    <div className={tileClasses} style={style}>
      <File
        propName='webTileFile'
        allowedExtensions={['pdf']}
        renderBlock={(file) => {
          return file ? (
            <a href={file.url} className={styles.tile__wrapper}>
              <div
                className={styles.tile__icon}
                style={{ backgroundImage: `url(${icon.src})` }}
              ></div>
              <div className={styles.tile__content}>
                <p
                  className={styles.tile__title}
                >{`${title} ${fileSizeTextRender(file.size)}`}</p>
                <h2 className={styles.tile__description}>
                  {heading}
                  <span>
                    <RightArrow />
                  </span>
                </h2>
              </div>
            </a>
          ) : (
            <p>Upload the Required PDF File</p>
          )
        }}
      />
    </div>
  )
}

WebTile.schema = {
  name: 'webtile',
  label: 'Web Tile',
  category: 'General',
  getDefaultProps: () => ({
    title: 'Download our brochure',
    heading: 'Read more about how we help family businesses',
    isFileSize: true,
    icon: {
      fallbackSrc:
        'https://images.reactbricks.com/original/b51ba71c-83be-47ab-8e3c-dab1c2f6e530.png',
      fallbackSrcSet:
        'https://images.reactbricks.com/src_set/b51ba71c-83be-47ab-8e3c-dab1c2f6e530-60.png 60w',
      fallbackType: 'image/png',
      src: 'https://images.reactbricks.com/original/b51ba71c-83be-47ab-8e3c-dab1c2f6e530.webp',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/b51ba71c-83be-47ab-8e3c-dab1c2f6e530.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/b51ba71c-83be-47ab-8e3c-dab1c2f6e530-60.webp 60w',
      width: 60,
      height: 60,
      alt: 'file donwload icon',
      seoName: 'file-download-icon',
    },
    webTileFile: {
      name: 'global-family-business.pdf',
      size: 3.028,
      url: 'https://files.reactbricks.com/f57c5ad4-16de-4807-834f-a139bd0abc5c/global-family-business.pdf',
    },
  }),
  sideEditProps: [
    {
      name: 'title',
      label: 'File Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isFileSize',
      label: 'Show File Size in Title',
      type: types.SideEditPropType.Boolean,
      show: (props) => !props.link,
    },
    {
      name: 'heading',
      label: 'File Heading',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'icon',
      label: 'Set Side Icon',
      type: types.SideEditPropType.Image,
    },
    {
      name: 'link',
      label: 'The Tile Link',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default WebTile
