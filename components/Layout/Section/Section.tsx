import classnames from 'classnames'
import React from 'react'
import styles from './Section.module.scss'
import { types, Text, Repeater } from 'react-bricks/frontend'
import { Home } from '../../icons'

type itemsPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse'
interface SectionProps {
  style?: React.CSSProperties
  className?: string
  wrapperClassName?: string
  isTitle?: boolean
  background?: string
  padding?: string
  textColor?: string
  itemsPosition?: itemsPosition
  children: React.ReactNode
}

const Section: types.Brick<SectionProps> = ({
  style,
  className,
  wrapperClassName,
  background,
  padding,
  textColor,
  itemsPosition,
  isTitle,
}) => {
  const sectionClasses = classnames(styles.section, {
    [className as string]: className,
  })

  const wrapperClasses = classnames(styles.section__wrapper, {
    [wrapperClassName as string]: wrapperClassName,
  })

  const stylesValue = {
    ...style,
    backgroundColor: background,
    padding: padding,
  }

  return (
    <section className={sectionClasses} style={stylesValue}>
      {isTitle && (
        <Text
          propName='title'
          placeholder='Type section title here...'
          renderBlock={({ children }) => (
            <h2 className={styles.section__title} style={{ color: textColor }}>
              {children}
            </h2>
          )}
        />
      )}
      <div className='container'>
        <div
          className={wrapperClasses}
          style={{ flexDirection: itemsPosition }}
        >
          <Repeater propName='section-cards-wrapper' />
          <Repeater propName='section-details-wrapper' />
          <Repeater propName='accordionwrapper' />
          <Repeater propName='headerwrapper' />
        </div>
      </div>
    </section>
  )
}

Section.schema = {
  name: 'section',
  label: 'Section',
  category: 'Layout',
  getDefaultProps: () => ({
    isTitle: true,
    itemsPosition: 'column-reverse',
  }),
  sideEditProps: [
    {
      name: 'isTitle',
      label: 'Hide title',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'background',
      label: 'Section Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#ffffff', label: 'White' },
          { value: 'rgb(242, 242, 242)', label: 'Light Grey' },
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
          { value: 'rgb(30, 149, 224)', label: 'Light Blue' },
        ],
      },
    },
    {
      name: 'padding',
      label: 'Section Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '1.5rem 0', label: 'small' },
          { value: '3rem 0', label: 'medium' },
          { value: '5rem 0', label: 'large' },
        ],
      },
    },
    {
      name: 'itemsPosition',
      label: 'Blocks Position',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'row', label: 'Row' },
          { value: 'row-reverse', label: 'Reverse Row' },
          { value: 'column', label: 'Column' },
          { value: 'column-reverse', label: 'Reverse Column' },
        ],
      },
    },
  ],
  repeaterItems: [
    {
      name: 'section-cards-wrapper',
      itemType: 'cards wrapper',
      itemLabel: 'Cards Wrapper',
    },
    {
      name: 'section-details-wrapper',
      itemType: 'details-section',
      itemLabel: 'Details Section',
    },
    {
      name: 'accordionwrapper',
      itemType: 'accordion',
      itemLabel: 'Accordion Component',
    },
    {
      name: 'headerwrapper',
      itemType: 'header-text',
      itemLabel: 'Header Text',
    },
  ],
}

export default Section
