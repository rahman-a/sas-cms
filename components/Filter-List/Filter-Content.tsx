import React from 'react'
import styles from './Filter-List.module.scss'
import { types, Repeater, Text } from 'react-bricks/frontend'

interface FilterListProps {}
const FilterList: types.Brick<FilterListProps> = ({ ...rest }) => {
  return (
    <div className={styles.filter} {...rest}>
      <Text
        propName='filter title'
        placeholder='Type title here...'
        renderBlock={({ children }) => (
          <h2 className={styles.filter__title}>{children}</h2>
        )}
      />
      <div className={styles.filter__tabs}>
        <Repeater propName='filtertabwrapper' />
      </div>
      <div className={styles.filter__items}>
        <Repeater propName='filteritemwrapper' />
      </div>
    </div>
  )
}

FilterList.schema = {
  name: 'filterlist',
  label: 'Filter List',
  category: 'Filter List',
  hideFromAddMenu: true,
  repeaterItems: [
    {
      name: 'filtertabwrapper',
      itemLabel: 'Filter Tab',
      itemType: 'filtertab',
    },
    {
      name: 'filteritemwrapper',
      itemLabel: 'Filter Content',
      itemType: 'filteritem',
    },
  ],
}

export default FilterList
