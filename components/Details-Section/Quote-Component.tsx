import React, { FunctionComponent } from 'react'
import styles from './Details-Section.module.scss'
import { types, RichText } from 'react-bricks/frontend'

type QuoteComponentProps = {
  name: string
  role: string
}

const QuoteComponent: types.Brick<QuoteComponentProps> = ({
  name,
  role,
  ...rest
}) => {
  return (
    <div className={styles.details__quote} {...rest}>
      <div className={styles.details__quote_wrapper}>
        <RichText
          propName='details quote'
          placeholder='Type the details quote here...'
          renderBlock={({ children }) => <blockquote>{children}</blockquote>}
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Highlight,
          ]}
        />
        {(name || role) && (
          <div className={styles.details__quote_meta}>
            {name && <p>{name},</p>}
            {role && <p>{role}</p>}
          </div>
        )}
      </div>
    </div>
  )
}

QuoteComponent.schema = {
  name: 'details-section-quote',
  label: 'Details Section Quote',
  category: 'Details Section',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: 'name',
      label: 'Who said the quote',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'role',
      label: 'ًWhat is the sayer job',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default QuoteComponent
