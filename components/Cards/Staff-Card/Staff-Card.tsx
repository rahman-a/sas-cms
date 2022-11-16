import React from 'react'
import styles from './Staff-Card.module.scss'
import { types, Image } from 'react-bricks/frontend'
import Link from 'next/link'
import StaffSocial from './Staff-Social'

interface StaffCardProps {
  name: string
  url: string
  role: string
  tel: string
  email: string
  facebook: string
  twitter: string
  linkedin: string
  youtube: string
  textColor: string
  padding: string
  background: string
}

const StaffCard: types.Brick<StaffCardProps> = ({
  name,
  url,
  role,
  tel,
  email,
  facebook,
  twitter,
  linkedin,
  youtube,
  textColor,
  padding,
  background,
  ...rest
}) => {
  return (
    <div
      className={styles.card}
      {...rest}
      style={{ padding: `${padding}rem`, backgroundColor: background }}
    >
      <div className={styles.card__wrapper}>
        <Image
          propName='card image'
          alt='Card image'
          maxWidth={100}
          renderWrapper={({ children }) => (
            <figure className={styles.card__photo}>{children}</figure>
          )}
        />
        <div
          className={styles.card__content}
          style={{ backgroundColor: background }}
        >
          <h3 style={{ color: textColor }} className={styles.card__name}>
            <Link href={url || ''}>
              <a>{name}</a>
            </Link>
          </h3>
          <p style={{ color: textColor }} className={styles.card__role}>
            {role}
          </p>
          {tel && (
            <p style={{ color: textColor }} className={styles.card__tel}>
              <span>Tel:&nbsp;</span>
              <a style={{ color: textColor }} href={`tel:${tel}`}>
                {tel}
              </a>
            </p>
          )}
          <div className={styles.card__social}>
            {email && (
              <a
                style={{ color: textColor }}
                href='mailto:staff@sas.com'
                className={styles.card__social_email}
                target='_blank'
                rel='noreferrer'
              >
                Email
              </a>
            )}
            {facebook && (
              <StaffSocial url={facebook} icon='follow_facebook.gif' />
            )}
            {twitter && (
              <StaffSocial url={twitter} icon='follow_twitter.webp' />
            )}
            {linkedin && (
              <StaffSocial url={linkedin} icon='follow_linkedin.png' />
            )}
            {youtube && (
              <StaffSocial url={youtube} icon='follow_youtube.webp' />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

StaffCard.schema = {
  name: 'staff card',
  label: 'Staff Card',
  category: 'Cards',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    textColor: '#2d2d2d',
  }),
  sideEditProps: [
    {
      groupName: 'Staff Details',
      defaultOpen: true,
      props: [
        {
          name: 'name',
          label: 'Staff name',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'role',
          label: 'Staff role',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'url',
          label: 'Profile page link',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'email',
          label: 'Contact email address',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'tel',
          label: 'Contact number',
          type: types.SideEditPropType.Text,
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
    },
    {
      groupName: 'Card UI',
      props: [
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
          name: 'padding',
          label: 'Card Padding',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '0', label: 'none' },
              { value: '1', label: 'small' },
              { value: '2', label: 'medium' },
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
    },
  ],
}

export default StaffCard
