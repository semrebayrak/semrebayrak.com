import { ButtonProps } from '../models/Button'
const Button = (props: ButtonProps) => (
  <button
    className={props.classname}
    onClick={props.onClick}
    children={props.children}
    type={props.type}
  />
)

export default Button
