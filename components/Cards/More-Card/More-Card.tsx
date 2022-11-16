import React from 'react'
import styles from './More-Card.module.scss'
import { types, Text, RichText, Repeater } from 'react-bricks/frontend'

interface MoreCardProps {
  textColor: string
  background: string
  padding: string
}

const MoreCard: types.Brick<MoreCardProps> = ({
  textColor,
  background,
  padding,
  ...rest
}) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: background, padding: `${padding}rem` }}
      {...rest}
    >
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
      <Repeater propName='card-button' />
    </div>
  )
}

MoreCard.schema = {
  name: 'more card',
  label: 'More Card',
  category: 'Cards',
  hideFromAddMenu: true,
  sideEditProps: [
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
          { value: '3', label: 'large' },
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
      itemLabel: 'More Card Button',
    },
  ],
}
export default MoreCard
