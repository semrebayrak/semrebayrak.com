import { InputProps } from '../models/Input'

const Input = ({
  type,
  className,
  placeholder,
  value,
  name,
  onChange,
  forwardRef,
}: InputProps) => (
  <input
    ref={forwardRef}
    name={name}
    type={type}
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(e.target.value)}
  />
)

export default Input
