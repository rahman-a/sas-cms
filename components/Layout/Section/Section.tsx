import classnames from 'classnames'
import React, { useEffect } from 'react'
import styles from './Section.module.scss'
import { types, Text, Repeater } from 'react-bricks/frontend'
import { Home } from '../../icons'

type itemsPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse'
interface SectionProps {
  style?: React.CSSProperties
  title?: string
  className?: string
  wrapperClassName?: string
  isTitle?: boolean
  isBackgroundImage?: boolean
  backgroundImage?: types.IImageSource
  background?: string
  padding?: string
  textColor?: string
  itemsPosition?: itemsPosition
  isContain?: boolean
  isTopBorder?: boolean
  children: React.ReactNode
}

const Section: types.Brick<SectionProps> = ({
  style,
  title,
  className,
  wrapperClassName,
  background,
  padding,
  textColor,
  itemsPosition,
  isTitle,
  isBackgroundImage,
  backgroundImage,
  isContain,
  isTopBorder,
}) => {
  const sectionClasses = classnames(styles.section, {
    [styles.section__background]: isBackgroundImage,
    [styles.section__contain]: isContain,
    [styles.section__topBorder]: isTopBorder,
    'backgroundColor--white': background === '#ffffff',
    'backgroundColor--light-gray': background === 'rgb(242, 242, 242)',
    'backgroundColor--container': background === '#2d2d2d',
    [className as string]: className,
  })

  const wrapperClasses = classnames(styles.section__wrapper, {
    [wrapperClassName as string]: wrapperClassName,
  })

  const titleClasses = classnames(styles.section__title, {
    'textColor--white': textColor === '#ffffff',
    'textColor--primary': textColor === 'rgb(30, 149, 224)',
    'textColor--container': textColor === '#2d2d2d',
  })

  const stylesValue = {
    ...style,
    background: `url(${backgroundImage?.src}) no-repeat center center`,
    padding: padding,
  }

  return (
    <section className={sectionClasses} style={stylesValue}>
      {isTitle && (
        <Text
          propName='title'
          placeholder='Type section title here...'
          renderBlock={({ children }) => (
            <h2 className={titleClasses}>{children}</h2>
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
          <Repeater propName='tabbedinterfacecontainerWrapper' />
          <Repeater propName='sectionfloatcontentWrapper' />
          <Repeater propName='sectionfilterlistWrapper' />
          <Repeater propName='sectiontabbednavbarwrapper' />
          <Repeater propName='sectionrowwrapper' />
          <Repeater propName='sectionjobsearchwrapper' />
          <Repeater propName='sectionparagraphwrapper' />
          <Repeater propName='sectionlistwrapper' />
          <Repeater propName='sectionspacerwrapper' />
          <Repeater propName='sectiondetailslistwrapper' />
          <Repeater propName='sectionmapwrapper' />
          <div className={styles.section__btns}>
            <Repeater propName='sectionbuttonWrapper' />
          </div>
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
    isTitle: false,
    itemsPosition: 'column-reverse',
  }),
  sideEditProps: [
    {
      name: 'isContain',
      label: 'Make Section Contain',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'isBackgroundImage',
      label: 'Set Background Image',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: types.SideEditPropType.Image,
      show: (props) => props.isBackgroundImage,
    },
    {
      name: 'isTitle',
      label: 'Show title',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'isTopBorder',
      label: 'Show top border',
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
          { value: '#2d2d2d', label: 'Soft Black' },
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
    {
      name: 'tabbedinterfacecontainerWrapper',
      itemType: 'tabbedinterfacecontextwrapper',
      itemLabel: 'Tabbed Interface Container',
    },
    {
      name: 'sectiontabbednavbarwrapper',
      itemType: 'tabbednavbarcontextwrapper',
      itemLabel: 'Tabbed Navbar Container',
    },
    {
      name: 'sectionfloatcontentWrapper',
      itemType: 'floatcontent',
      itemLabel: 'Float Content Container',
    },
    {
      name: 'sectionbuttonWrapper',
      itemType: 'button',
      itemLabel: 'Section Button',
    },
    {
      name: 'sectionfilterlistWrapper',
      itemType: 'filterlistcontext',
      itemLabel: 'Section Filter List',
    },
    {
      name: 'sectionrowwrapper',
      itemType: 'row',
      itemLabel: 'Row',
    },
    {
      name: 'sectionlistwrapper',
      itemType: 'listcontainer',
      itemLabel: 'List',
    },
    {
      name: 'sectionspacerwrapper',
      itemType: 'spacer',
      itemLabel: 'Spacer',
    },
    {
      name: 'sectionjobsearchwrapper',
      itemType: 'job-search',
      itemLabel: 'Job Search Section',
    },
    {
      name: 'sectionparagraphwrapper',
      itemType: 'paragraph',
      itemLabel: 'Paragraph',
    },
    {
      name: 'sectiondetailslistwrapper',
      itemType: 'details-list',
      itemLabel: 'Details List',
    },
    {
      name: 'sectionmapwrapper',
      itemType: 'map',
      itemLabel: 'Map',
    },
  ],
}

export default Section
