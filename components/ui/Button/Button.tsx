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
  link,
  style,
  dataAttributes,
  className,
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
    [className as string]: className,
  })

  const btnClickHandler = () => {
    if (disabled) return
    onClick && onClick()
  }
  if (as === 'a') {
    return (
      <Link href={link || '#'}>
        <a
          {...rest}
          style={style}
          onClick={btnClickHandler}
          className={btnClasses}
          {...dataAttributes}
        >
          {text}
          {icon && <ButtonIcon icon={icon} />}
        </a>
      </Link>
    )
  }
  return (
    <button
      onClick={btnClickHandler}
      className={btnClasses}
      disabled={disabled}
      style={style}
      type={type}
      {...rest}
      {...dataAttributes}
    >
      {text}
      {icon && <ButtonIcon icon={icon} />}
    </button>
  )
}

Button.schema = {
  name: 'button',
  label: 'Button',
  category: 'UI',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    variant: 'dark-primary',
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
      name: 'link',
      label: 'Button Link to ...',
      type: types.SideEditPropType.Text,
      validate: (value) =>
        !value ||
        value.startsWith('https://') ||
        value.startsWith('http://') ||
        'Link must start with http:// or https://',
    },
  ],
}

export default Button
