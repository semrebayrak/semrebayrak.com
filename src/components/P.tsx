import { FC, useState } from 'react'
interface PProps {
  letter: string
}
const P: FC<PProps> = ({ letter }) => {
  const [hover, setHover] = useState(false)

  return (
    <p
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() =>
        setTimeout(() => {
          setHover(false)
        }, 1000)
      }
      className={hover ? 'vibrate' : 'default'}
    >
      {letter}
    </p>
  )
}

export default P
