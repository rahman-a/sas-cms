import React from 'react'
import styles from './Social.module.scss'
import { types } from 'react-bricks/frontend'
import SocialIcon from './Social-Icon'

interface SocialProps {
  background: string
  textColor: string
  position: string
  padding: string
  facebook: string
  twitter: string
  linkedin: string
  youtube: string
  isFollow: boolean
}

const SocialMedia: types.Brick<SocialProps> = ({
  background,
  textColor,
  position,
  padding,
  facebook,
  twitter,
  linkedin,
  youtube,
  isFollow,
  ...rest
}) => {
  return (
    <div
      className={styles.social}
      {...rest}
      style={{ backgroundColor: background, padding: padding }}
    >
      <div
        className={styles.social__wrapper}
        style={{ justifyContent: position }}
      >
        {isFollow && (
          <h2 style={{ color: textColor }} className={styles.social__title}>
            Follow us
          </h2>
        )}
        <ul className={styles.social__list}>
          {facebook && (
            <SocialIcon
              link={facebook}
              src='follow_facebook.gif'
              alt='facebook profile'
            />
          )}
          {twitter && (
            <SocialIcon
              link={twitter}
              src='follow_twitter.webp'
              alt='twitter account'
            />
          )}
          {linkedin && (
            <SocialIcon
              link={linkedin}
              src='follow_linkedin.png'
              alt='linkedin profile'
            />
          )}
          {youtube && (
            <SocialIcon
              link={youtube}
              src='follow_youtube.webp'
              alt='youtube channel'
            />
          )}
        </ul>
      </div>
    </div>
  )
}

SocialMedia.schema = {
  name: 'social-media',
  label: 'Social Media',
  category: 'General',
  getDefaultProps: () => ({
    isFollow: true,
  }),
  sideEditProps: [
    {
      name: 'textColor',
      label: 'Follow text Color',
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
      name: 'background',
      label: 'Social panel background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#2d2d2d', label: 'Soft Black' },
          { value: 'transparent', label: 'Transparent' },
          { value: '#ffffff', label: 'White' },
          { value: 'rgb(242, 242, 242)', label: 'Light Grey' },
        ],
      },
    },
    {
      name: 'position',
      label: 'Social icons position',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'center', label: 'Center' },
          { value: 'flex-start', label: 'Start' },
          { value: 'flex-end', label: 'End' },
        ],
      },
    },
    {
      name: 'padding',
      label: 'Social panel spacing',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '0', label: 'None' },
          { value: '1.2rem', label: 'Small' },
          { value: '2rem', label: 'Medium' },
        ],
      },
    },
    {
      name: 'isFollow',
      label: 'Toggle follow text',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'linkedin',
      label: 'Linkedin profile page link',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'twitter',
      label: 'Twitter profile page link',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'youtube',
      label: 'Youtube profile page link',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'facebook',
      label: 'Facebook profile page link',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default SocialMedia
