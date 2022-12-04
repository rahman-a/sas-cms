import React from 'react'
import styles from './Advantage-Card.module.scss'
import { types, Image, Text, RichText } from 'react-bricks/frontend'
import Link from 'next/link'

interface AdvantageCardProps {
  url: string
  className?: string
  background?: string
  showImage?: boolean
}

const AdvantageCard: types.Brick<AdvantageCardProps> = ({
  url,
  className,
  background,
  showImage,
  ...rest
}) => {
  return (
    <article
      className={`${styles.card} ${className ? className : ''}`}
      style={{ backgroundColor: background }}
      {...rest}
    >
      <Link href={url || '#'}>
        <a className={styles.card__wrapper}>
          {showImage && (
            <Image
              propName='card image'
              alt='advantage card image'
              maxWidth={100}
              renderWrapper={({ children }) => (
                <figure className={styles.card__image}>{children}</figure>
              )}
            />
          )}
          <div className={styles.card__content}>
            <Text
              propName='card title'
              placeholder='Type card title...'
              renderBlock={({ children }) => (
                <h3 className={styles.card__title}>{children}</h3>
              )}
            />
            <RichText
              propName='card description'
              placeholder='Type card description...'
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
                types.RichTextFeatures.Highlight,
              ]}
              renderBlock={({ children }) => (
                <p className={styles.card__text}>{children}</p>
              )}
            />
          </div>
        </a>
      </Link>
    </article>
  )
}

AdvantageCard.schema = {
  name: 'advantage card',
  label: 'Advantage Card',
  category: 'Cards',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    showImage: true,
  }),
  sideEditProps: [
    {
      name: 'url',
      label: 'Card URL',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'background',
      label: 'Card Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: 'transparent', label: 'Transparent' },
          { value: '#ffffff', label: 'White' },
          { value: 'rgb(30, 149, 224)', label: 'Light Blue' },
          { value: 'rgb(242, 242, 242)', label: 'Light Grey' },
        ],
      },
    },
    {
      name: 'showImage',
      label: 'Show Image',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default AdvantageCard
