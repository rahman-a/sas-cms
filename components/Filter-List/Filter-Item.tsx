import React, { useContext } from 'react'
import styles from './Filter-List.module.scss'
import classnames from 'classnames'
import { types, Repeater, Text } from 'react-bricks/frontend'
import { FilterListContext } from '@context/Filter-List'

interface FilterItemsProps {
  tabId: string
  isEdit?: boolean
}

const FilterItems: types.Brick<FilterItemsProps> = ({
  tabId,
  isEdit,
  ...rest
}) => {
  const { activeList } = useContext(FilterListContext)
  const filterContentClasses = classnames(styles.filter__content, {
    [styles['filter__content--active']]: activeList === tabId || isEdit,
  })
  return (
    <div className={filterContentClasses} {...rest}>
      <Text
        propName='list title'
        placeholder='Type list title here...'
        renderBlock={({ children }) => (
          <h3 className={styles.filter__content_title}>{children}</h3>
        )}
      />
      <Repeater propName='filterspacerwrapper' />
      <Repeater propName='filteritemlist' />
    </div>
  )
}

FilterItems.schema = {
  name: 'filteritem',
  label: 'Filter Item',
  category: 'Filter List',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: 'tabId',
      label: 'Tab Id',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'filteritemlist',
      itemLabel: 'Filter Item List',
      itemType: 'listcontainer',
    },
    {
      name: 'filterspacerwrapper',
      itemLabel: 'Spacer',
      itemType: 'spacer',
      max: 1,
    },
  ],
}

export default FilterItems
