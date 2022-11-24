import React, { useRef, useState, useCallback } from 'react'
import styles from '../Accordion.module.scss'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { RightArrow } from '@components/icons'
import { MenuItem } from '@customTypes/Menu'
import { types, Repeater } from 'react-bricks/frontend'

interface AccordionItemProps {
  isSubmenu?: boolean
}

const AccordionItem: types.Brick<AccordionItemProps> = ({
  isSubmenu,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const router = useRouter()
  return (
    <div className={styles.accordion__item} {...rest}>
      <div className={styles.accordion__header}>
        <Repeater
          propName='accordionitemlink'
          itemProps={{
            isOpen,
            setIsOpen,
            isSubmenu,
            isMainLink: true,
          }}
        />
      </div>
      {isSubmenu && (
        <Repeater
          propName='accordionitemscontainer'
          itemProps={{
            isOpen,
            setIsOpen,
          }}
        />
      )}
    </div>
  )
}

AccordionItem.schema = {
  name: 'accordionitem',
  label: 'Accordion Item',
  category: 'Accordion',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: 'isSubmenu',
      label: 'Has Submenu?',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'accordionitemlink',
      itemLabel: 'Accordion Item Link',
      itemType: 'accordionlink',
      max: 20,
    },
    {
      name: 'accordionitemscontainer',
      itemLabel: 'Accordion Subitems Container',
      itemType: 'accordionsubmenucontainer',
      max: 20,
    },
  ],
}

export default AccordionItem
