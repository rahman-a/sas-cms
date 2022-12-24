import React, {
  KeyboardEvent,
  useEffect,
  useState,
  useRef,
  SyntheticEvent,
  FunctionComponent,
  FocusEvent,
  useCallback,
} from 'react'
import styles from './Select.module.scss'
import classnames from 'classnames'
import {
  Asterisk,
  CheckCircle,
  DownArrow,
  ExclamationFilledCircle,
} from '@components/icons'

type Option = {
  _id: string
  label: string
  value: string
  name?: string
}

interface SelectProps {
  onSelectHandler: (option: Option) => void
  options: Option[]
  label?: string
  name?: string
  required?: boolean
  disabled?: boolean
  onBlur?: (
    required: boolean | undefined,
    e: React.FocusEvent<HTMLDivElement>
  ) => void
  error?: string
  success?: boolean
  style?: React.CSSProperties
  className?: string
}

const Select: FunctionComponent<SelectProps> = ({
  onSelectHandler,
  options,
  className,
  style,
  label,
  name,
  onBlur,
  required,
  disabled,
  error,
  success,
}) => {
  const [selected, setSelected] = useState<string | null>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [focusedElement, setFocusedElement] = useState(0)
  const [isContainerFocused, setIsContainerFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [errors, setErrors] = useState<string | null>(null)
  const [successState, setSuccessState] = useState<boolean>(false)

  const selectHandler = (option: Option) => {
    if (disabled) return
    setSelected(option.label)
    onSelectHandler({ name, ...option })
    setIsOpen(false)
  }

  const findOptionWithIndex = (index: number) => {
    return options.find((option, i) => i === index)
  }

  const selectItemWithArrows = (e: KeyboardEvent) => {
    if (!isFocused || disabled) return
    if (e.key === 'Enter') setIsOpen(!isOpen)
    if (e.key === 'ArrowDown') {
      if (focusedElement < options.length - 1) {
        setFocusedElement(focusedElement + 1)
        setSelected(findOptionWithIndex(focusedElement + 1)!.label)
        onSelectHandler(findOptionWithIndex(focusedElement + 1)!)
      }
    }
    if (e.key === 'ArrowUp') {
      if (focusedElement > 0) {
        setFocusedElement(focusedElement - 1)
        setSelected(findOptionWithIndex(focusedElement - 1)!.label)
        onSelectHandler(findOptionWithIndex(focusedElement - 1)!)
      }
    }
  }

  const toggleSelectHandler = (e: SyntheticEvent) => {
    if (disabled) return
    setIsOpen(!isOpen)
    if (!isOpen) inputRef.current?.focus()
    if (!isFocused) {
      setIsFocused(true)
      inputRef.current?.focus()
    }
  }

  const selectClasses = classnames(styles.select, {
    [styles.select__error]: errors,
    [styles.select__success]: successState,
    [styles.select__disabled]: disabled,
    [className as string]: className,
  })

  const onBlurHandler = (e: FocusEvent<HTMLDivElement>) => {
    if (required && selected === 'Other (please specify)') {
      setErrors('This is field is required')
    } else {
      setErrors(null)
    }
    setIsFocused(false)

    onBlur && onBlur(required, e)
  }

  const checkSelectValue = useCallback(() => {
    if (!required || selected === '') return
    if (selected === 'Other (please specify)') {
      setErrors('Please, select a topic')
      setSuccessState(false)
    } else {
      setErrors(null)
      setSuccessState(true)
    }
  }, [required, selected])

  useEffect(() => {
    isFocused ? setIsOpen(true) : setIsOpen(false)
  }, [isFocused])

  useEffect(() => {
    error && setErrors(error)
    if (success) {
      setErrors(null)
      setSuccessState(true)
    }
  }, [error, success])

  useEffect(() => {
    checkSelectValue()
  }, [checkSelectValue])
  return (
    <div
      className={selectClasses}
      style={style}
      onKeyDown={selectItemWithArrows}
      onBlur={(e) => !isContainerFocused && onBlurHandler(e)}
      onMouseEnter={() => setIsContainerFocused(true)}
      onMouseLeave={() => setIsContainerFocused(false)}
    >
      <div className={styles.select__input} onClick={toggleSelectHandler}>
        {label && (
          <label htmlFor={label} className={styles.select__label}>
            {label}
            {required && (
              <span>
                <Asterisk />
              </span>
            )}
          </label>
        )}
        {errors && <p className={styles.select__msg}>{errors}</p>}
        <input
          id={label}
          ref={inputRef}
          type='text'
          defaultValue={selected}
          onKeyDown={(e) => e.preventDefault()}
        />
        <span>
          <DownArrow />
        </span>
      </div>
      <ul
        className={styles.select__list}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        {options.map((option, index) => (
          <li
            key={option._id}
            className={`${styles.select__item} ${
              focusedElement === index ? styles.select__item_focused : ''
            }`}
            onMouseEnter={() => setFocusedElement(index)}
            onClick={() => selectHandler(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
      <div className={styles.select__check}>
        {errors ? (
          <span className={styles.select__check_error}>
            <ExclamationFilledCircle />
          </span>
        ) : (
          successState && (
            <span className={styles.select__check_valid}>
              <CheckCircle />
            </span>
          )
        )}
      </div>
    </div>
  )
}

export default Select
