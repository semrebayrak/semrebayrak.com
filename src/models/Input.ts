export interface InputProps {
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'color'
    | 'file'
    | 'range'
    | 'checkbox'
    | 'radio'
    | 'hidden'
    | 'image'
    | 'submit'
    | 'reset'
  placeholder?: string
  value?: any
  name?: string
  onChange: (e: string) => void
  className?: string
  forwardRef?: any
}
