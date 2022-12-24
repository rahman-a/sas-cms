import React from 'react'
import styles from './Popular-Card.module.scss'
import classnames from 'classnames'
import { types, Text, RichText, Image } from 'react-bricks/frontend'
import Link from 'next/link'

interface PopularCardProps {
  link: string
  textColor: string
  padding: string
  background: string
  className?: string
  cardSize?: string
}

const PopularCard: types.Brick<PopularCardProps> = ({
  link,
  textColor,
  padding,
  background,
  className,
  cardSize,
  ...rest
}) => {
  const cardClass = classnames(styles.card, {
    [styles['card__sm']]: cardSize === 'small',
    [styles['card__md']]: cardSize === 'medium',
    [styles['card__lg']]: cardSize === 'large',
    [className as string]: className,
  })
  return (
    <article className={cardClass} {...rest}>
      <Link href={link || ''}>
        <a className={styles.card__wrapper}>
          <Image
            propName='card image'
            alt='Card image'
            renderWrapper={({ children }) => (
              <figure className={styles.card__figure}>{children}</figure>
            )}
          />
          <div
            className={styles.card__details}
            style={{ padding: `${padding}rem`, backgroundColor: background }}
          >
            <Text
              propName='card title'
              placeholder='Type card title...'
              renderBlock={({ children }) => (
                <h4
                  style={{ color: textColor }}
                  title={children}
                  className={styles.card__title}
                >
                  {children.length > 80
                    ? `${children.substring(0, 80)}...`
                    : children}
                </h4>
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
                <p
                  style={{ color: textColor }}
                  className={styles.card__description}
                >
                  {children.length > 180
                    ? `${children.substring(0, 180)}...`
                    : children}
                </p>
              )}
            />
          </div>
        </a>
      </Link>
    </article>
  )
}

PopularCard.schema = {
  name: 'popular card',
  label: 'Popular Card',
  category: 'Cards',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    textColor: '#2d2d2d',
  }),
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
    {
      name: 'cardSize',
      label: 'Card Size',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ],
      },
    },
  ],
}

export default PopularCard
