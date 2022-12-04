import React from 'react'
import styles from './Row.module.scss'
import classnames from 'classnames'
import { types, Repeater } from 'react-bricks/frontend'

interface RowProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  directionSM?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  alignItems?: 'top' | 'center' | 'bottom'
  justifyItems?: 'start' | 'center' | 'end' | 'between' | 'around'
  itemsWrap?: boolean
  isEdit: boolean
  setGap?: string
}

const Row: types.Brick<RowProps> = ({
  direction,
  directionSM,
  alignItems,
  justifyItems,
  itemsWrap,
  isEdit,
  setGap,
}) => {
  const rowClasses = classnames(styles.row, {
    [styles.row__wrap]: itemsWrap,
    [styles['row__flex-row']]: direction === 'row',
    [styles['row__flex-column']]: direction === 'column',
    [styles['row__flex-reverse']]: direction === 'row-reverse',
    [styles['row__flex-column-reverse']]: direction === 'column-reverse',
    [styles['row__sm_direction-row']]: directionSM === 'row',
    [styles['row__sm_direction-column']]: directionSM === 'column',
    [styles['row__sm_direction-reverse']]: directionSM === 'row-reverse',
    [styles['row__sm_direction-column-reverse']]:
      directionSM === 'column-reverse',
    [styles['row__align-top']]: alignItems === 'top',
    [styles['row__align-center']]: alignItems === 'center',
    [styles['row__align-bottom']]: alignItems === 'bottom',
    [styles['row__justify-start']]: justifyItems === 'start',
    [styles['row__justify-center']]: justifyItems === 'center',
    [styles['row__justify-end']]: justifyItems === 'end',
    [styles['row__justify-between']]: justifyItems === 'between',
    [styles['row__justify-around']]: justifyItems === 'around',
    [styles['row__gap--sm']]: setGap === 'small',
    [styles['row__gap--md']]: setGap === 'medium',
    [styles['row__gap--lg']]: setGap === 'large',
    [styles['row__gap--xl']]: setGap === 'larger',
    'playground__brick--edit': isEdit,
  })
  return (
    <div className={rowClasses}>
      <Repeater propName='column' />
    </div>
  )
}

Row.schema = {
  name: 'row',
  label: 'Row',
  category: 'Layout',
  getDefaultProps: () => ({
    isEdit: true,
  }),
  repeaterItems: [
    {
      name: 'column',
      itemLabel: 'Column',
      itemType: 'column',
    },
  ],
  sideEditProps: [
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
    {
      groupName: 'Direction',
      props: [
        {
          name: 'direction',
          label: 'Items Direction',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { label: 'Row', value: 'row' },
              { label: 'Column', value: 'column' },
              { label: 'Column-Reverse', value: 'column-reverse' },
              { label: 'Row-Reverse', value: 'row-reverse' },
            ],
          },
        },
        {
          name: 'directionSM',
          label: 'Items Direction on Small Devices',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { label: 'Row', value: 'row' },
              { label: 'Column', value: 'column' },
              { label: 'Column-Reverse', value: 'column-reverse' },
              { label: 'Row-Reverse', value: 'row-reverse' },
            ],
          },
        },
      ],
    },
    {
      groupName: 'Alignment & Justification',
      props: [
        {
          name: 'alignItems',
          label: 'Items Alignment',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { label: 'Top', value: 'top' },
              { label: 'Center', value: 'center' },
              { label: 'Bottom', value: 'bottom' },
            ],
          },
        },
        {
          name: 'justifyItems',
          label: 'Items Justification',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { label: 'Start', value: 'start' },
              { label: 'Center', value: 'center' },
              { label: 'End', value: 'end' },
              { label: 'Between', value: 'between' },
              { label: 'Around', value: 'around' },
            ],
          },
        },
      ],
    },
    {
      name: 'setGap',
      label: 'Space Between Items',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { label: 'Small', value: 'small' },
          { label: 'Medium', value: 'medium' },
          { label: 'Large', value: 'large' },
          { label: 'Larger', value: 'larger' },
        ],
      },
    },
    {
      name: 'itemsWrap',
      label: 'Items Wrap A round each other',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default Row
