import React from 'react'
import styles from './Float-Content.module.scss'
import { types, Text, RichText, Repeater } from 'react-bricks/frontend'

interface FloatContentProps {
  background: string
  textColor: string
}

const FloatContent: types.Brick<FloatContentProps> = ({
  background,
  textColor,
}) => {
  return (
    <div className={styles.content} style={{ backgroundColor: background }}>
      <Text
        propName='title'
        placeholder='Type title here...'
        renderBlock={({ children }) => (
          <h3 style={{ color: textColor }} className={styles.content__title}>
            {children}
          </h3>
        )}
      />
      <RichText
        propName='text'
        placeholder='Type a text...'
        renderBlock={({ children }) => (
          <div style={{ color: textColor }} className={styles.content__text}>
            {children}
          </div>
        )}
        allowedFeatures={[types.RichTextFeatures.Bold]}
      />
      <Repeater propName='floatcontentbutton' />
    </div>
  )
}

FloatContent.schema = {
  name: 'floatcontent',
  label: 'Float Content Container',
  category: 'Layout',
  sideEditProps: [
    {
      name: 'background',
      label: 'Section Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#ffffff', label: 'White' },
          { value: 'rgb(242, 242, 242)', label: 'Light Grey' },
          { value: 'rgb(30, 149, 224)', label: 'Primary Blue' },
          { value: '#2d2d2d', label: 'Light Dark' },
        ],
      },
    },
    {
      name: 'textColor',
      label: 'Section Title Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#ffffff', label: 'White' },
          { value: '#2d2d2d', label: 'Soft Black' },
          { value: 'rgb(30, 149, 224)', label: 'Primary Blue' },
          { value: '#c9ecfc', label: 'Light Blue' },
        ],
      },
    },
  ],
  repeaterItems: [
    {
      name: 'floatcontentbutton',
      itemLabel: 'Float Content Button',
      itemType: 'button',
    },
  ],
}

export default FloatContent
