import React from 'react'
import styles from './Meet-Card.module.scss'
import { types, Text, RichText, Image, Repeater } from 'react-bricks/frontend'
import classnames from 'classnames'
import Link from 'next/link'
import { useMediaQuery } from '@hooks'

interface MeetCardProps {
  textColor: string
  background: string
  link: string
  isHovered: boolean
}

const MeetCard: types.Brick<MeetCardProps> = ({
  link,
  textColor,
  background,
  isHovered,
  ...rest
}) => {
  const isMediumDevices = useMediaQuery('(max-width: 991.98px)')
  const renderDescription = (text: string): string => {
    if (isMediumDevices) {
      return text.slice(0, 100) + '...'
    }
    return text
  }

  const cardClasses = classnames(styles.card, {
    [styles.card__fixed]: !isHovered,
  })

  return (
    <div className={cardClasses} {...rest}>
      <Link href={link || '#'}>
        <a className={styles.card__wrapper}>
          <Image
            propName='card image'
            alt='Card image'
            renderWrapper={({ children }) => (
              <figure className={styles.card__image}>{children}</figure>
            )}
          />

          <div className={styles.card__content}>
            <div className={styles.card__content_container}>
              <Text
                propName='card title'
                placeholder='Type card title...'
                renderBlock={({ children }) => (
                  <h3 className={styles.card__name}>{children}</h3>
                )}
              />
              <Text
                propName='card role'
                placeholder='Type card role...'
                renderBlock={({ children }) => (
                  <p className={styles.card__role}>{children}</p>
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
                  <p className={styles.card__description}>
                    {renderDescription(children)}
                  </p>
                )}
              />
              <p className={styles.card__cta}>
                <Repeater propName='card-button' />
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

MeetCard.schema = {
  name: 'meet card',
  label: 'Meet Card',
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
  repeaterItems: [
    {
      name: 'card-button',
      itemType: 'button',
      itemLabel: 'Meet Card Button',
    },
  ],
}

export default MeetCard
