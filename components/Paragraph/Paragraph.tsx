import React from 'react'
import styles from './Paragraph.module.scss'
import classnames from 'classnames'
import { types, RichText } from 'react-bricks/frontend'

interface ParagraphProps {
  centerText?: boolean
  padding?: string
}

const Paragraph: types.Brick<ParagraphProps> = ({
  centerText,
  padding,
  ...rest
}) => {
  const paragraphClasses = classnames(styles.paragraph, {
    [styles['paragraph__center']]: centerText,
    [styles['paragraph__padding--sm']]: padding === 'small',
    [styles['paragraph__padding--md']]: padding === 'medium',
    [styles['paragraph__padding--lg']]: padding === 'large',
    [styles['paragraph__padding--xl']]: padding === 'larger',
  })
  return (
    <div {...rest}>
      <RichText
        propName='text'
        placeholder='Type text here...'
        multiline={true}
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
          types.RichTextFeatures.Code,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Link,
        ]}
        renderBlock={({ children }) => (
          <p className={paragraphClasses}>{children}</p>
        )}
      />
    </div>
  )
}

Paragraph.schema = {
  name: 'paragraph',
  label: 'Paragraph',
  category: 'Typography',
  sideEditProps: [
    {
      name: 'centerText',
      label: 'Center Text',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'padding',
      label: 'Section Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
          { value: 'larger', label: 'Larger' },
        ],
      },
    },
  ],
}

export default Paragraph
