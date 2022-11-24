import React from 'react'
import styles from './Footer.module.scss'
import { types, Repeater } from 'react-bricks/frontend'
import classnames from 'classnames'

interface FooterLegalContainerProps {
  isEdit: boolean
}

const FooterLegalContainer: types.Brick<FooterLegalContainerProps> = ({
  isEdit,
  ...rest
}) => {
  const legalClasses = classnames(styles.footer__legal, {
    [styles.footer__border]: isEdit,
  })

  return (
    <div className={legalClasses} {...rest}>
      <Repeater propName='footer-legal-link' />
    </div>
  )
}

FooterLegalContainer.schema = {
  name: 'footer-legal-container',
  label: 'Footer legal container',
  category: 'Footer',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isBorder: true,
  }),
  sideEditProps: [
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'footer-legal-link',
      itemType: 'footer-link',
      itemLabel: 'Footer legal link',
      max: 6,
    },
  ],
}

export default FooterLegalContainer
