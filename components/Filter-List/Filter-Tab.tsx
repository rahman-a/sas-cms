import React, { useContext, useEffect } from 'react'
import styles from './Filter-List.module.scss'
import { types, Repeater } from 'react-bricks/frontend'
import { FilterListContext } from '@context/Filter-List'

interface FilterTabProps {
  tabId: string
  isEdit?: boolean
}
const FilterTab: types.Brick<FilterTabProps> = ({ tabId, isEdit, ...rest }) => {
  const { activeList, setActiveList } = useContext(FilterListContext)

  useEffect(() => {
    if (!activeList) {
      setActiveList(tabId)
    }
  }, [activeList, tabId])
  return (
    <div {...rest} className={isEdit ? 'playground__brick--edit' : ''}>
      <Repeater
        propName='filteritembutton'
        itemProps={{
          onClick: () => setActiveList(tabId),
          className: activeList === tabId ? styles.filter__active : '',
        }}
      />
    </div>
  )
}

FilterTab.schema = {
  name: 'filtertab',
  label: 'Filter Tab',
  category: 'Filter List',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isEdit: true,
  }),
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
      name: 'filteritembutton',
      itemLabel: 'Filter Item Button',
      itemType: 'button',
    },
  ],
}

export default FilterTab
