type Variants =
  | 'dark-primary'
  | 'dark-white'
  | 'white'
  | 'primary-outlined'
  | 'secondary-outlined'
  | 'gray-outlined'
  | 'text'

export interface ButtonType {
  variant?: Variants
  text: string
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  disabled?: boolean
  icon?: 'arrow' | 'thick-arrow' | 'long-arrow'
  rounded?: boolean
  as?: 'a' | 'button'
  link?: string
  dataAttributes?: Record<string, string | boolean>
}
