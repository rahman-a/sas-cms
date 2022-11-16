import React from 'react'
import styles from './Feature-Card.module.scss'
import { FeatureCard as FeaturedCardType } from '@customTypes/Section'
import { types, Text, RichText } from 'react-bricks/frontend'
import Link from 'next/link'

interface FeatureCardProps {
  link?: string
  textColor?: string
  background?: string
}

const FeatureCard: types.Brick<FeatureCardProps> = ({
  link,
  textColor,
  background,
  ...rest
}) => {
  return (
    <div
      className={styles.card}
      {...rest}
      style={{ backgroundColor: background }}
    >
      <Link href={link || '#'}>
        <a className={styles.card__wrapper}>
          <Text
            propName='title'
            placeholder='Type card title here...'
            renderBlock={({ children }) => (
              <h2 style={{ color: textColor }} className={styles.card__title}>
                {children}
              </h2>
            )}
          />
          <RichText
            propName='description'
            placeholder='Type card description here...'
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
              types.RichTextFeatures.Highlight,
            ]}
            renderBlock={({ children }) => (
              <p style={{ color: textColor }} className={styles.card__text}>
                {children.length > 75
                  ? children.slice(0, 75) + '...'
                  : children}
              </p>
            )}
          />
        </a>
      </Link>
    </div>
  )
}

FeatureCard.schema = {
  name: 'feature card',
  label: 'Feature Card',
  category: 'Cards',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: 'link',
      label: 'Card link to..',
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
          { value: '#2d2d2d', label: 'Soft Black' },
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
}

export default FeatureCard
