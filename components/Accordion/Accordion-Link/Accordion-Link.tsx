import React from 'react'
import styles from '../Accordion.module.scss'
import Link from 'next/link'
import classnames from 'classnames'
import { RightArrow } from '@components/icons'
import { types } from 'react-bricks/frontend'
import { useRouter } from 'next/router'

interface AccordionLinkProps {
  link?: string
  linkText?: string
  submenuLink?: boolean
  isSubmenu: boolean
  isOpen: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  isEdit?: boolean
  isMainLink?: boolean
}

const AccordionLink: types.Brick<AccordionLinkProps> = ({
  link,
  isOpen,
  setIsOpen,
  linkText,
  isSubmenu,
  submenuLink,
  isEdit,
  isMainLink,
  ...rest
}) => {
  const router = useRouter()
  const contentHeader = classnames({
    [styles.accordion__link]: isMainLink,
    [styles.accordion__content_link]: submenuLink,
    [styles.accordion__content_header]: submenuLink,
  })
  const contentTitle = classnames(styles.accordion__title, {
    [styles.accordion__content_title]: submenuLink,
  })
  const iconClasses = classnames(styles.accordion__arrow, {
    [styles.accordion__arrow_open]: isOpen,
  })

  const toggleAccordionHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(e.currentTarget)
    console.log({ isSubmenu })
    if (!isSubmenu) {
      if (!link) return
      router.push(link)
      return
    }
    console.log({ isOpen })
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }
  return (
    <div {...rest} className={isEdit ? 'playground__brick--edit' : ''}>
      <Link href={link || ''}>
        <a className={contentHeader} onClick={toggleAccordionHandler}>
          <h2 className={contentTitle}>{linkText}</h2>
          {isSubmenu && (
            <span className={iconClasses}>
              <RightArrow />
            </span>
          )}
        </a>
      </Link>
    </div>
  )
}

AccordionLink.schema = {
  name: 'accordionlink',
  label: 'Accordion Link',
  category: 'Accordion',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'linkText',
      label: 'Link Text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'link',
      label: 'Link URL',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default AccordionLink
