import React from 'react'
import styles from './Image-Card.module.scss'
import classnames from 'classnames'
import { types, Text, RichText } from 'react-bricks/frontend'
import Link from 'next/link'

interface ImageCardProps {
  style?: React.CSSProperties
  className?: string
  link?: string
  textColor?: string
  background?: string
  grow?: string
  backgroundImage?: types.IImageSource
}

const ImageCard: types.Brick<ImageCardProps> = ({
  style,
  className,
  link,
  textColor,
  background,
  grow,
  backgroundImage,
  ...rest
}) => {
  const cardClass = classnames(styles.card, className, {
    [styles['card__grow']]: grow && grow !== 'none',
    [styles['card__grow--1']]: grow === 'one',
    [styles['card__grow--2']]: grow === 'two',
    [styles['card__grow--3']]: grow === 'three',
  })
  const cardWrapperClasses = classnames(styles.card__wrapper, {
    [styles.card__wrapper_white]: background === '#ffffff',
    [styles.card__wrapper_gray]: background === 'rgb(242, 242, 242)',
    [styles.card__wrapper_black]: background === '#2d2d2d',
  })

  return (
    <div {...rest} className={cardClass} style={style}>
      <Link href={link || '#'}>
        <a
          className={cardWrapperClasses}
          style={{ backgroundImage: `url(${backgroundImage?.src})` }}
        >
          <div className={styles.card__content}>
            <Text
              propName='card title'
              placeholder='Type card title...'
              renderBlock={({ children }) => (
                <h2 className={styles.card__title} style={{ color: textColor }}>
                  {children}
                </h2>
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
                <div className={styles.card__description}>
                  <p style={{ color: textColor }}>{children}</p>
                </div>
              )}
            />
          </div>
        </a>
      </Link>
    </div>
  )
}

ImageCard.schema = {
  name: 'image card',
  label: 'Image Card',
  category: 'Cards',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: 'link',
      label: 'Card link to..',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'backgroundImage',
      label: 'Upload background image',
      type: types.SideEditPropType.Image,
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
    {
      name: 'grow',
      label: 'Card Grow',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'none', label: 'Reset' },
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' },
        ],
      },
    },
  ],
}

export default ImageCard
