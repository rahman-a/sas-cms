import React from 'react'
import styles from '../Accordion.module.scss'
import classnames from 'classnames'
import { types, Repeater } from 'react-bricks/frontend'

interface AccordionColumnProps {
  isEdit?: boolean
  index: number
}

const AccordionColumn: types.Brick<AccordionColumnProps> = ({
  isEdit,
  index,
  ...rest
}) => {
  const columnClasses = classnames(styles.accordion__col, {
    'playground__brick--edit': isEdit,
    [styles['accordion__col-edit']]: isEdit,
  })
  return (
    <div className={columnClasses} {...rest} key={index}>
      <Repeater propName='accordionitems' />
    </div>
  )
}

AccordionColumn.schema = {
  name: 'accordioncolumn',
  label: 'Accordion Column',
  category: 'Accordion',
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
  ],
  repeaterItems: [
    {
      name: 'accordionitems',
      itemLabel: 'Accordion Item',
      itemType: 'accordionitem',
    },
  ],
}

export default AccordionColumn
