import React, {
  FocusEvent,
  FunctionComponent,
  useEffect,
  useState,
} from 'react'
import styles from './Input.module.scss'
import classnames from 'classnames'
import {
  Asterisk,
  ExclamationFilledCircle,
  CheckCircle,
} from '@components/icons'

interface InputProps {
  label: string
  type: string
  value: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  placeholder?: string
  disabled?: boolean
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  error?: string
  success?: boolean
  style?: React.CSSProperties
  className?: string
}

const Input: FunctionComponent<InputProps> = ({
  label,
  type,
  value,
  name,
  onChange,
  required,
  placeholder,
  disabled,
  onBlur,
  onFocus,
  error,
  success,
  style,
  className,
}) => {
  const [errors, setErrors] = useState<string | null>(null)
  const inputClasses = classnames(styles.input, {
    [styles.input__error]: errors,
    [styles.input__success]: success,
    [className as string]: className,
  })
  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (required && !value) {
      setErrors('This field is required')
    }
    onBlur && onBlur(e)
  }

  useEffect(() => {
    error && setErrors(error)
    success && setErrors(null)
  }, [error, success])
  return (
    <fieldset className={inputClasses} style={style}>
      {label && (
        <label htmlFor={label} className={styles.input__label}>
          {label}
          {required && (
            <span>
              <Asterisk />
            </span>
          )}
        </label>
      )}
      {errors && <span className={styles.input__msg}>{errors}</span>}
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        required={required}
        value={value}
        name={name}
        disabled={disabled}
        className={styles.input__field}
        onChange={(e) => onChange(e)}
        onBlur={(e) => onBlurHandler(e)}
        onFocus={(e) => onFocus && onFocus(e)}
      />
      <div className={styles.input__check}>
        {errors ? (
          <span className={styles.input__check_error}>
            <ExclamationFilledCircle />
          </span>
        ) : (
          success && (
            <span className={styles.input__check_valid}>
              <CheckCircle />
            </span>
          )
        )}
      </div>
    </fieldset>
  )
}

export default Input
