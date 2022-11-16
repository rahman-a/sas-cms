import classnames from 'classnames'
import React from 'react'
import styles from './Cards-Wrapper.module.scss'
import { types, Text, Repeater } from 'react-bricks/frontend'

interface CardsWrapperProps {
  children: JSX.Element | JSX.Element[]
  gapType: 'none' | 'small' | 'medium' | 'large'
  isTitle?: boolean
  isScroll?: boolean
  style?: React.CSSProperties
  className?: string
  textColor?: string
  noWrap?: boolean
}

const CardsWrapper: types.Brick<CardsWrapperProps> = ({
  children,
  gapType,
  isTitle,
  isScroll,
  style,
  className,
  textColor,
  noWrap,
  ...rest
}) => {
  const cardsClasses = classnames(styles.cards, {
    [styles.cards__scroll]: isScroll,
  })

  const wrapperClasses = classnames(styles.cards__wrapper, {
    [className as string]: className,
    [styles.cards__wrapper_nowrap]: noWrap,
  })
  return (
    <div className={cardsClasses} style={style} {...rest}>
      {isTitle && (
        <Text
          propName='title'
          placeholder='Type title here'
          renderBlock={({ children }) => (
            <h3 style={{ color: textColor }}>{children}</h3>
          )}
        />
      )}
      <div className={styles.cards__container}>
        <div className={wrapperClasses} style={{ gap: `${gapType}rem` }}>
          <Repeater propName='wrapper-advantage-card' />
          <Repeater propName='wrapper-feature-card' />
          <Repeater propName='wrapper-image-card' />
          <Repeater propName='wrapper-main-card' />
          <Repeater propName='wrapper-meet-card' />
          <Repeater propName='wrapper-more-card' />
          <Repeater propName='wrapper-popular-card' />
          <Repeater propName='wrapper-staff-card' />
        </div>
      </div>
    </div>
  )
}

CardsWrapper.schema = {
  name: 'cards wrapper',
  label: 'Cards Wrapper',
  category: 'Cards',
  getDefaultProps: () => ({
    isTitle: true,
  }),
  repeaterItems: [
    {
      name: 'wrapper-advantage-card',
      itemType: 'advantage card',
      itemLabel: 'Advantage Card',
      max: 6,
    },
    {
      name: 'wrapper-feature-card',
      itemType: 'feature card',
      itemLabel: 'Feature Card',
      max: 6,
    },
    {
      name: 'wrapper-image-card',
      itemType: 'image card',
      itemLabel: 'Image Card',
      max: 6,
    },
    {
      name: 'wrapper-main-card',
      itemType: 'main card',
      itemLabel: 'Main Card',
      max: 6,
    },
    {
      name: 'wrapper-meet-card',
      itemType: 'meet card',
      itemLabel: 'Meet Card',
      max: 6,
    },
    {
      name: 'wrapper-more-card',
      itemType: 'more card',
      itemLabel: 'More Card',
      max: 6,
    },
    {
      name: 'wrapper-popular-card',
      itemType: 'popular card',
      itemLabel: 'Popular Card',
      max: 6,
    },
    {
      name: 'wrapper-staff-card',
      itemType: 'staff card',
      itemLabel: 'Staff Card',
      max: 10,
    },
  ],
  sideEditProps: [
    {
      name: 'isTitle',
      label: 'Hide title',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'isScroll',
      label: 'Make Wrapper scrollable',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'noWrap',
      label: 'Align items in one line',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'textColor',
      label: 'Section Title Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#ffffff', label: 'White' },
          { value: '#2d2d2d', label: 'Light Dark' },
        ],
      },
    },
    {
      name: 'gapType',
      label: 'space between cards',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '0', label: 'none' },
          { value: '1.25', label: 'small' },
          { value: '2.5', label: 'medium' },
          { value: '4', label: 'large' },
        ],
      },
    },
  ],
}

export default CardsWrapper
