import React from 'react'
import styles from './Main-Card.module.scss'
import { ThickLongRightArrow } from '@components/icons'
import { types, Text, RichText, Image } from 'react-bricks/frontend'
import Link from 'next/link'
import classnames from 'classnames'

interface MainCardProps {
  link?: string
  textColor?: string
  background?: string
  isHovered?: boolean
}

const MainCard: types.Brick<MainCardProps> = ({
  link,
  textColor,
  background,
  isHovered,
  ...rest
}) => {
  const wrapperClasses = classnames(styles.card__wrapper, {
    [styles.card__fixed]: !isHovered,
  })
  return (
    <article className={styles.card} {...rest}>
      <Link href={link || '#'}>
        <a className={wrapperClasses}>
          <Image
            propName='card image'
            alt='Card image'
            renderWrapper={({ children }) => (
              <figure className={styles.card__figure}>{children}</figure>
            )}
          />
          <div className={styles.card__details}>
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

            <span className={styles.card__link} style={{ color: textColor }}>
              <span>Read more</span>
              <ThickLongRightArrow />
            </span>
          </div>
          <div
            className={styles.card__overlay}
            style={{ backgroundColor: background }}
          ></div>
        </a>
      </Link>
    </article>
  )
}

MainCard.schema = {
  name: 'main card',
  label: 'Main Card',
  category: 'Cards',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isHovered: true,
  }),
  sideEditProps: [
    {
      name: 'link',
      label: 'Card link to..',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isHovered',
      label: 'Disable hover effect',
      type: types.SideEditPropType.Boolean,
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
          { value: 'rgb(30, 149, 224)', label: 'Light Blue' },
          { value: '#2d2d2d', label: 'Soft Black' },
        ],
      },
    },
  ],
}

export default MainCard
