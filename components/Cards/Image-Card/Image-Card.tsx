import React, { FunctionComponent } from 'react'
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
  backgroundImage?: types.IImageSource
}

const ImageCard: types.Brick<ImageCardProps> = ({
  style,
  className,
  link,
  textColor,
  background,
  backgroundImage,
  ...rest
}) => {
  const cardClass = classnames(styles.card, className)
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
                <h2 style={{ color: textColor }}>{children}</h2>
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
                <p style={{ color: textColor }}>{children}</p>
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
  ],
}

export default ImageCard
