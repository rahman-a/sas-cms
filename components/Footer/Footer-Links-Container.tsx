import React from 'react'
import styles from './Footer.module.scss'
import { types, Repeater } from 'react-bricks/frontend'
import classnames from 'classnames'

interface FooterLinksContainerProps {
  isEdit: boolean
}

const FooterLinksContainer: types.Brick<FooterLinksContainerProps> = ({
  isEdit,
  ...rest
}) => {
  const headerClasses = classnames(styles.footer__header, {
    [styles.footer__border]: isEdit,
  })

  return (
    <div className={headerClasses} {...rest}>
      <Repeater propName='footer-container-link' />
    </div>
  )
}

FooterLinksContainer.schema = {
  name: 'footer-links-container',
  label: 'Footer links container',
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
      name: 'footer-container-link',
      itemType: 'footer-link',
      itemLabel: 'Footer container link',
      max: 6,
    },
  ],
}

export default FooterLinksContainer
