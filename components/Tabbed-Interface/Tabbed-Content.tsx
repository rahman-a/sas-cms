import React, { useContext, useEffect } from 'react'
import styles from './Tabbed-Interface.module.scss'
import classnames from 'classnames'
import { TabbedInterfaceContext } from '@context/Tabbed-Interface-Context'
import { types, Text, RichText, Repeater } from 'react-bricks/frontend'

interface TabbedContentProps {
  isEdit?: boolean
  linkContentId?: string
}

const TabbedContent: types.Brick<TabbedContentProps> = ({
  isEdit,
  linkContentId,
  ...rest
}) => {
  const { activeTab } = useContext(TabbedInterfaceContext)
  const tabContentClasses = classnames(styles.tab__content, {
    [styles.tab__content_active]: activeTab === linkContentId || isEdit,
    'playground__brick--edit': isEdit,
  })
  return (
    <div className={tabContentClasses} {...rest}>
      <Text
        propName='tabcontenttitle'
        placeholder='Type title here...'
        renderBlock={({ children }) => (
          <h3 className={styles.tab__title}>{children}</h3>
        )}
      />
      <RichText
        propName='tabcontentdescription'
        placeholder='Type tab description here...'
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
          types.RichTextFeatures.Highlight,
        ]}
        renderBlock={({ children }) => <p>{children}</p>}
      />
      <Repeater propName='spacerwrapper' />
      <Repeater propName='tabcontentbutton' />
    </div>
  )
}

TabbedContent.schema = {
  name: 'tabbedcontent',
  label: 'Tab Content',
  category: 'Tabbed Interface',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'linkContentId',
      label: 'Link Content to Tab Id',
      type: types.SideEditPropType.Text,
    },
  ],
  repeaterItems: [
    {
      name: 'tabcontentbutton',
      itemLabel: 'Tabbed Content Button',
      itemType: 'button',
      max: 1,
    },
    {
      name: 'spacerwrapper',
      itemLabel: 'Spacer',
      itemType: 'spacer',
      max: 1,
    },
  ],
}

export default TabbedContent
