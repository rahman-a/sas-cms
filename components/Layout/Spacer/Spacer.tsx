import React from 'react'
import { types } from 'react-bricks/frontend'
import styles from './Spacer.module.scss'
import classnames from 'classnames'

interface SpacerProps {
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  margin?: string
  height?: string
  width?: string
  isEdit?: boolean
}

const Spacer: types.Brick<SpacerProps> = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  margin,
  height,
  width,
  isEdit,
}) => {
  const spacerClasses = classnames({
    [styles['spacer__m-0']]: margin === 'none',
    [styles['spacer__m-sm']]: margin === 'small',
    [styles['spacer__m-md']]: margin === 'medium',
    [styles['spacer__m-lg']]: margin === 'large',
    [styles['spacer__m-xl']]: margin === 'larger',
    [styles['spacer__mt-0']]: marginTop === 'none',
    [styles['spacer__mt-sm']]: marginTop === 'small',
    [styles['spacer__mt-md']]: marginTop === 'medium',
    [styles['spacer__mt-lg']]: marginTop === 'large',
    [styles['spacer__mt-xl']]: marginTop === 'larger',
    [styles['spacer__mb-0']]: marginBottom === 'none',
    [styles['spacer__mb-sm']]: marginBottom === 'small',
    [styles['spacer__mb-md']]: marginBottom === 'medium',
    [styles['spacer__mb-lg']]: marginBottom === 'large',
    [styles['spacer__mb-xl']]: marginBottom === 'larger',
    [styles['spacer__ml-0']]: marginLeft === 'none',
    [styles['spacer__ml-sm']]: marginLeft === 'small',
    [styles['spacer__ml-md']]: marginLeft === 'medium',
    [styles['spacer__ml-lg']]: marginLeft === 'large',
    [styles['spacer__ml-xl']]: marginLeft === 'larger',
    [styles['spacer__mr-0']]: marginRight === 'none',
    [styles['spacer__mr-sm']]: marginRight === 'small',
    [styles['spacer__mr-md']]: marginRight === 'medium',
    [styles['spacer__mr-lg']]: marginRight === 'large',
    [styles['spacer__mr-xl']]: marginRight === 'larger',
    [styles['spacer__w-0']]: width === 'none',
    [styles['spacer__w-sm']]: width === 'small',
    [styles['spacer__w-md']]: width === 'medium',
    [styles['spacer__w-lg']]: width === 'large',
    [styles['spacer__w-xl']]: width === 'larger',
    [styles['spacer__h-0']]: height === 'none',
    [styles['spacer__h-sm']]: height === 'small',
    [styles['spacer__h-md']]: height === 'medium',
    [styles['spacer__h-lg']]: height === 'large',
    [styles['spacer__h-xl']]: height === 'larger',
    'playground__brick--edit': isEdit,
  })
  return <div className={spacerClasses}></div>
}

Spacer.schema = {
  name: 'spacer',
  label: 'Spacer',
  category: 'Layout',
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
      name: 'margin',
      label: 'Margin',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'none', label: 'None' },
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
          { value: 'larger', label: 'Larger' },
        ],
      },
    },
    {
      name: 'marginTop',
      label: 'Margin Top',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'none', label: 'None' },
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
          { value: 'larger', label: 'Larger' },
        ],
      },
    },
    {
      name: 'marginBottom',
      label: 'Margin Bottom',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'none', label: 'None' },
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
          { value: 'larger', label: 'Larger' },
        ],
      },
    },
    {
      name: 'marginLeft',
      label: 'Margin Left',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'none', label: 'None' },
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
          { value: 'larger', label: 'Larger' },
        ],
      },
    },
    {
      name: 'marginRight',
      label: 'Margin Right',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'none', label: 'None' },
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
          { value: 'larger', label: 'Larger' },
        ],
      },
    },
    {
      name: 'height',
      label: 'Spacer Height',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'none', label: 'None' },
          { value: 'small', label: '0.5rem' },
          { value: 'medium', label: '1.5rem' },
          { value: 'large', label: '2.5rem' },
          { value: 'larger', label: '3.5rem' },
        ],
      },
    },
    {
      name: 'width',
      label: 'Spacer Width',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'none', label: '0%' },
          { value: 'small', label: '25%' },
          { value: 'medium', label: '50%' },
          { value: 'large', label: '75%' },
          { value: 'larger', label: '100%' },
        ],
      },
    },
  ],
}

export default Spacer
