import React from 'react'
import styles from './Row.module.scss'
import classnames from 'classnames'
import { types, Repeater } from 'react-bricks/frontend'

interface ColumnProps {
  isEdit?: boolean
  width?: '1/1' | '3/4' | '1/2' | '1/3' | '1/4' | 'reset'
  widthSM?: '1/1' | '1/2' | 'reset'
}

const Column: types.Brick<ColumnProps> = ({ width, widthSM, isEdit }) => {
  const columnClasses = classnames(styles.column, {
    [styles['column-100']]: width === '1/1',
    [styles['column-75']]: width === '3/4',
    [styles['column-50']]: width === '1/2',
    [styles['column-33']]: width === '1/3',
    [styles['column-25']]: width === '1/4',
    [styles['column__reset']]: width === 'reset',
    [styles['column__sm-100']]: widthSM === '1/1',
    [styles['column__sm-50']]: widthSM === '1/2',
    [styles['column__sm-reset']]: widthSM === 'reset',
    'playground__brick--edit': isEdit,
  })
  return (
    <div className={columnClasses}>
      <Repeater propName='section-wrapper' />
      <Repeater propName='details-section-wrapper' />
      <Repeater propName='meet-card-wrapper' />
      <Repeater propName='button-wrapper' />
      <Repeater propName='header-wrapper' />
      <Repeater propName='spacer-wrapper' />
      <Repeater propName='details-list-wrapper' />
      <Repeater propName='paragraph-wrapper' />
      <Repeater propName='list-wrapper' />
      <Repeater propName='flat-list-wrapper' />
    </div>
  )
}

Column.schema = {
  name: 'column',
  label: 'Column',
  category: 'Layout',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isEdit: true,
  }),
  repeaterItems: [
    {
      name: 'section-wrapper',
      itemLabel: 'Section',
      itemType: 'section',
    },
    {
      name: 'details-section-wrapper',
      itemLabel: 'Details Section',
      itemType: 'details-section',
    },
    {
      name: 'meet-card-wrapper',
      itemLabel: 'Meet Card',
      itemType: 'meet card',
    },
    {
      name: 'button-wrapper',
      itemLabel: 'Button',
      itemType: 'button',
    },
    {
      name: 'header-wrapper',
      itemLabel: 'Header Text',
      itemType: 'header-text',
    },
    {
      name: 'paragraph-wrapper',
      itemLabel: 'Paragraph',
      itemType: 'paragraph',
    },
    {
      name: 'spacer-wrapper',
      itemLabel: 'Spacer',
      itemType: 'spacer',
    },
    {
      name: 'list-wrapper',
      itemLabel: 'List',
      itemType: 'listcontainer',
    },
    {
      name: 'flat-list-wrapper',
      itemLabel: 'Flat List',
      itemType: 'flat-list',
    },
    {
      name: 'details-list-wrapper',
      itemType: 'details-list',
      itemLabel: 'Details List',
    },
  ],
  sideEditProps: [
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'width',
      label: 'Column Width',
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
      label: 'Column Width on Small Devices',
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
}

export default Column
