import { useState } from 'react'
import { ExpProps } from '../../models/Explanation'
const Thoughts = ({ text }: ExpProps) => {
  const [hover, setHover] = useState(false)
  return (
    <p
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setTimeout(() => setHover(false), 1700)}
      className={'thoughts' + (hover ? ' highlight' : '')}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default Thoughts
