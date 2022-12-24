import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'
import { ButtonType } from '@customTypes/Button'
import { types } from 'react-bricks/frontend'
import Link from 'next/link'
import ButtonIcon from './Button-Icon'

const Button: types.Brick<ButtonType> = ({
  variant,
  text,
  type,
  icon,
  disabled,
  onClick,
  rounded,
  as,
  URLText = '',
  style,
  dataAttributes,
  className,
  fontSize,
  width,
  ...rest
}) => {
  const btnClasses = classnames(styles.btn, {
    [styles['btn__dark-primary']]: variant === 'dark-primary',
    [styles['btn__dark-white']]: variant === 'dark-white',
    [styles['btn__white']]: variant === 'white',
    [styles['btn__outlined']]: variant === 'primary-outlined',
    [styles['btn__secondary-outlined']]: variant === 'secondary-outlined',
    [styles['btn__gray-outlined']]: variant === 'gray-outlined',
    [styles['btn__rounded']]: rounded,
    [styles['btn__text']]: variant === 'text',
    [styles['btn__wide']]: icon,
    [styles['btn__disabled-text']]: variant === 'text' && disabled,
    [styles['btn__disabled']]: disabled,
    [styles['btn__font-medium']]: fontSize === 'medium',
    [styles['btn__font-large']]: fontSize === 'large',
    [styles['btn__auto']]: width === 'auto',
    [styles['btn__max-content']]: width === 'max',
    [styles['btn__min-content']]: width === 'min',
    [className as string]: className,
  })

  const btnClickHandler = () => {
    if (disabled) return
    onClick && onClick()
  }

  if (as === 'a') {
    return (
      <div {...rest}>
        <Link href={URLText}>
          <a
            style={style}
            onClick={btnClickHandler}
            className={btnClasses}
            {...dataAttributes}
          >
            {text}
            {icon && <ButtonIcon icon={icon} />}
          </a>
        </Link>
      </div>
    )
  }
  return (
    <div {...rest}>
      <button
        onClick={btnClickHandler}
        className={btnClasses}
        disabled={disabled}
        style={style}
        type={type}
        {...dataAttributes}
      >
        {text}
        {icon && <ButtonIcon icon={icon} />}
      </button>
    </div>
  )
}

Button.schema = {
  name: 'button',
  label: 'Button',
  category: 'UI',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    text: 'Click here..',
  }),
  sideEditProps: [
    {
      name: 'text',
      label: 'Text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'variant',
      label: 'Variant',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { label: 'Dark Primary', value: 'dark-primary' },
          { label: 'Dark White', value: 'dark-white' },
          { label: 'White', value: 'white' },
          { label: 'Primary Outlined', value: 'primary-outlined' },
          { label: 'Secondary Outlined', value: 'secondary-outlined' },
          { label: 'Gray Outlined', value: 'gray-outlined' },
          { label: 'Text', value: 'text' },
        ],
      },
    },
    {
      name: 'type',
      label: 'Button Type',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { label: 'Button', value: 'button' },
          { label: 'Submit', value: 'submit' },
          { label: 'Reset', value: 'reset' },
        ],
      },
    },
    {
      name: 'width',
      label: 'Button width',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { label: 'Auto', value: 'auto' },
          { label: 'Max-Width', value: 'max' },
          { label: 'Min-Width', value: 'min' },
        ],
      },
    },
    {
      name: 'icon',
      label: 'Button icon type',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { label: '....', value: '' },
          { label: 'Arrow', value: 'arrow' },
          { label: 'Long Arrow', value: 'long-arrow' },
          { label: 'Thick Arrow', value: 'thick-arrow' },
        ],
      },
    },
    {
      name: 'as',
      label: 'Button Display',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { label: 'Normal button', value: 'button' },
          { label: 'Make button as link', value: 'a' },
        ],
      },
    },
    {
      name: 'fontSize',
      label: 'Font Size',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { label: 'Medium', value: 'medium' },
          { label: 'large', value: 'large' },
        ],
      },
    },
    {
      name: 'disabled',
      label: 'Disable Button',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'rounded',
      label: 'Rounded Button',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'URLText',
      label: 'Button Link to ...',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default Button
