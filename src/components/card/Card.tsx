import { ReactElement } from 'react'
import { CardProps } from '../../models/Card'
const Card = ({ children, className, onClick, isActive, onMouseEnter }: CardProps): ReactElement => {

  return (
    <div onMouseEnter={onMouseEnter} onClick={onClick} className={'card '.concat(className ? className : '').concat(isActive ? ' active' : '')}>
      {children}
    </div>
  )
}

export default Card
