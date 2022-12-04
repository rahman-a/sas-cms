import React from 'react'
import styles from './List.module.scss'
import classnames from 'classnames'
import { types, Repeater } from 'react-bricks/frontend'

interface ListProps {
  isEdit?: boolean
  width?: '1/1' | '3/4' | '1/2' | '1/3' | '1/4' | 'reset'
  widthSM?: '1/1' | '1/2' | 'reset'
}

const List: types.Brick<ListProps> = ({ isEdit, width, widthSM, ...rest }) => {
  const listClasses = classnames(styles.list, {
    [styles['list-100']]: width === '1/1',
    [styles['list-75']]: width === '3/4',
    [styles['list-50']]: width === '1/2',
    [styles['list-33']]: width === '1/3',
    [styles['list-25']]: width === '1/4',
    [styles['list__reset']]: width === 'reset',
    [styles['list__sm-100']]: widthSM === '1/1',
    [styles['list__sm-50']]: widthSM === '1/2',
    [styles['list__sm-reset']]: widthSM === 'reset',
    'playground__brick--edit': isEdit,
  })
  return (
    <div className={listClasses} {...rest}>
      <Repeater propName='detailsitemwrapper' />
    </div>
  )
}

List.schema = {
  name: 'details-list',
  label: 'Details List',
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
      name: 'width',
      label: 'List Width',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'reset', label: 'Reset' },
          { value: '1/1', label: '100%' },
          { value: '3/4', label: '75%' },
          { value: '1/2', label: '50%' },
          { value: '1/3', label: '33%' },
          { value: '1/4', label: '25%' },
        ],
      },
    },
    {
      name: 'widthSM',
      label: 'List Width on Small Devices',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'reset', label: 'Reset' },
          { value: '1/1', label: '100%' },
          { value: '1/2', label: '50%' },
        ],
      },
    },
  ],
  repeaterItems: [
    {
      name: 'detailsitemwrapper',
      itemLabel: 'Details Item',
      itemType: 'details-item',
    },
  ],
}

export default List
