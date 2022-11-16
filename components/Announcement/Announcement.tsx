import React from 'react'
import styles from './Announcement.module.scss'
import { types, Repeater, Text } from 'react-bricks/frontend'
import classnames from 'classnames'
import Link from 'next/link'

interface announcementProps {
  link: string
  textColor: string
  background: string
  fontSize: string
}

const Announcement: types.Brick<announcementProps> = ({
  link,
  textColor,
  fontSize,
  background,
  ...rest
}) => {
  const headerClasses = classnames(styles.announcement__header, {
    [styles.announcement__header_small]: fontSize === 'small',
    [styles.announcement__header_medium]: fontSize === 'medium',
    [styles.announcement__header_large]: fontSize === 'large',
  })
  return (
    <div
      className={styles.announcement}
      style={{ backgroundColor: background }}
      {...rest}
    >
      <Link href={link || ''}>
        <a className={styles.announcement__wrapper}>
          <div className={styles.announcement__data}>
            <Text
              propName='announcement title'
              placeholder='Type text...'
              renderBlock={({ children }) => (
                <h2 className={headerClasses} style={{ color: textColor }}>
                  {children}
                </h2>
              )}
            />
            <Repeater
              propName='announcement-button'
              itemProps={{
                className: styles.announcement__wrapper_btn,
              }}
            />
          </div>
          <div className={styles.announcement__decorator}>
            <span></span>
            <span className={styles.announcement__decorator_sqh}></span>
            <span className={styles.announcement__decorator_sqh}></span>
            <span></span>
            <span className={styles.announcement__decorator_sqs}></span>
            <span className={styles.announcement__decorator_sqs}></span>
            <span></span>
          </div>
        </a>
      </Link>
    </div>
  )
}

Announcement.schema = {
  name: 'announcement',
  label: 'Announcement',
  category: 'General',
  getDefaultProps: () => ({
    fontSize: 'large',
  }),
  sideEditProps: [
    {
      name: 'link',
      label: 'Link',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'textColor',
      label: 'Text Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#ffffff', label: 'White' },
          { value: 'rgb(242, 242, 242)', label: 'Light Grey' },
          { value: 'rgb(30, 149, 224)', label: 'Light Blue' },
          { value: '#2d2d2d', label: 'Soft Black' },
        ],
      },
    },
    {
      name: 'fontSize',
      label: 'Font Size',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'small', label: 'small' },
          { value: 'medium', label: 'medium' },
          { value: 'large', label: 'large' },
        ],
      },
    },
    {
      name: 'background',
      label: 'Card Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#ffffff', label: 'White' },
          { value: 'rgb(242, 242, 242)', label: 'Light Grey' },
          { value: '#2d2d2d', label: 'Soft Black' },
        ],
      },
    },
  ],
  repeaterItems: [
    {
      name: 'announcement-button',
      itemType: 'button',
      itemLabel: 'Announcement Button',
      max: 1,
    },
  ],
}

export default Announcement
