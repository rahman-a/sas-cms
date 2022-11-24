import React from 'react'
import styles from './Details-Section.module.scss'
import classnames from 'classnames'
import { types, Repeater, Text, RichText } from 'react-bricks/frontend'
import { ButtonType } from '@customTypes/Button'
import AsComponent from './AsComponents'

interface DetailsSectionProps {
  style?: React.CSSProperties
  className?: string
  as?: 'div' | 'a'
  btnProps?: ButtonType
  reverse?: boolean
  children?: React.ReactNode
  id?: string
  // bricks props
  link: string
  isTitle: boolean
  halfWidth: boolean
  isDescription: boolean
  font?: string
}

const DetailsSection: types.Brick<DetailsSectionProps> = ({
  style,
  className,
  as,
  reverse,
  children,
  id,
  link,
  isTitle,
  isDescription,
  halfWidth,
  font,
  ...rest
}) => {
  const detailsClasses = classnames(styles.details, {
    [className as string]: className,
    [styles.details__halfWidth]: halfWidth,
  })

  const detailsWrapperClasses = classnames(styles.details__wrapper, {
    [styles.details__wrapper_reverse]: reverse,
  })

  const detailsTitleClasses = classnames(styles.details__title, {
    [styles['details__title-font1']]: font === 'font1',
    [styles['details__title-font2']]: font === 'font2',
  })

  return (
    <section className={detailsClasses} style={style} {...rest}>
      <AsComponent href={link} className={detailsWrapperClasses} as={as}>
        <Repeater propName='details-image' />
        <Repeater propName='details-video' />
        <Repeater propName='details-quote' />
        <div className={styles.details__row}>
          <div className={styles.details__content}>
            {isTitle && (
              <Text
                propName='title'
                placeholder='Type the section title here...'
                renderBlock={({ children }) => (
                  <h2 className={detailsTitleClasses} id={id}>
                    {children}
                  </h2>
                )}
              />
            )}
            <Repeater propName='headerText' />
            {isDescription && (
              <RichText
                propName='description'
                placeholder='Type the section description here....'
                renderBlock={({ children }) => (
                  <div className={styles.details__text}>{children}</div>
                )}
                allowedFeatures={[
                  types.RichTextFeatures.Bold,
                  types.RichTextFeatures.Italic,
                  types.RichTextFeatures.Link,
                ]}
              />
            )}

            <Repeater
              propName='details-button'
              itemProps={{ style: { marginTop: '3rem' }, link }}
            />
          </div>
        </div>
      </AsComponent>
    </section>
  )
}

DetailsSection.schema = {
  name: 'details-section',
  label: 'Details Section',
  category: 'Details Section',
  getDefaultProps: () => ({
    isTitle: true,
    isDescription: true,
  }),
  sideEditProps: [
    {
      name: 'font',
      label: 'Header Font Type',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'font1', label: 'Display Small Text' },
          { value: 'font2', label: 'Headline Large' },
        ],
      },
    },
    {
      name: 'halfWidth',
      label: 'Take up half width of Parent',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'link',
      label: 'Details Link',
      type: types.SideEditPropType.Text,
      validate: (value) =>
        !value ||
        value.startsWith('https://') ||
        value.startsWith('http://') ||
        'Link must start with http:// or https://',
    },
    {
      name: 'isTitle',
      label: 'Toggle section title',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'isDescription',
      label: 'Toggle section description',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'reverse',
      label: 'right to left',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'details-button',
      itemType: 'button',
      itemLabel: 'Details Button',
    },
    {
      name: 'details-image',
      itemType: 'details-section-image',
      itemLabel: 'Details Section Image',
    },
    {
      name: 'details-video',
      itemType: 'details-section-video',
      itemLabel: 'Details Section video',
    },
    {
      name: 'details-quote',
      itemType: 'details-section-quote',
      itemLabel: 'Details Section quote',
    },
    {
      name: 'headerText',
      itemType: 'header-text',
      itemLabel: 'Details Section Header',
    },
  ],
}
export default DetailsSection
