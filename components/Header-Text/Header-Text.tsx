import React from 'react'
import styles from './Header-Text.module.scss'
import { types, Text } from 'react-bricks/frontend'
import classnames from 'classnames'

type Bold = 'bolder' | 'lighter'

interface HeaderTextProps {
  padding: string
  margin: string
  textColor: string
  fontSize: string
  font: string
  bold: Bold
}

const HeaderText: types.Brick<HeaderTextProps> = ({
  padding,
  margin,
  textColor,
  font,
  bold,
}) => {
  const styleValues = {
    padding,
    margin,
    color: textColor,
    fontWeight: bold,
  }

  const headerClasses = classnames({
    [styles['header__font1']]: font === 'font1',
    [styles['header__font2']]: font === 'font2',
    [styles['header__font3']]: font === 'font3',
    [styles['header__font4']]: font === 'font4',
    [styles['header__font5']]: font === 'font5',
  })

  return (
    <div>
      <Text
        propName='titleText'
        placeholder='Type title here...'
        renderBlock={({ children }) => (
          <h2 className={headerClasses} style={styleValues}>
            {children}
          </h2>
        )}
      />
    </div>
  )
}

HeaderText.schema = {
  name: 'header-text',
  label: 'Header Text',
  category: 'Typography',
  getDefaultProps: () => ({
    headerType: 'h1',
    bold: 'bolder',
    textColor: '#000',
    padding: '0.5rem',
    margin: '0.5rem',
  }),
  sideEditProps: [
    {
      name: 'font',
      label: 'Header Font Type',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'font1', label: 'Display Text' },
          { value: 'font2', label: 'Display Small Text' },
          { value: 'font3', label: 'Headline Large' },
          { value: 'font4', label: 'Headline Medium' },
          { value: 'font5', label: 'Headline Small' },
        ],
      },
    },
    {
      name: 'bold',
      label: 'Header Bold Value',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'bolder', label: 'Bolder' },
          { value: 'lighter', label: 'Lighter' },
        ],
      },
    },
    {
      name: 'fontSize',
      label: 'Header Font size',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '3.5rem', label: 'Large' },
          { value: '5rem', label: 'Larger' },
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
          { value: 'rgb(242, 242, 242)', label: 'Light Grey' },
          { value: 'rgb(30, 149, 224)', label: 'Light Blue' },
          { value: '#2d2d2d', label: 'Soft Black' },
          { value: '#000', label: 'Black' },
        ],
      },
    },
    {
      name: 'padding',
      label: 'Header Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '0', label: 'None' },
          { value: '0.5rem', label: 'Small' },
          { value: '1.5rem', label: 'Medium' },
          { value: '2.5rem', label: 'Large' },
          { value: '3.5rem', label: 'X-Large' },
        ],
      },
    },
    {
      name: 'margin',
      label: 'Header Margin',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '0', label: 'None' },
          { value: '0.5rem', label: 'Small' },
          { value: '1.5rem', label: 'Medium' },
          { value: '2.5rem', label: 'Large' },
          { value: '3.5rem', label: 'X-Large' },
        ],
      },
    },
  ],
}

export default HeaderText
