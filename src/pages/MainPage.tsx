import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button'
import Heading from '../components/Heading'
import { headingText } from '../sections/main/headingText'
export const MainPage: FC = () => {
  const navigate = useNavigate()
  const [hover, setHover] = useState<boolean>(false)
  const handleClick = (contact: string) => {
    navigate(`/contact`)
  }
  return (
    <section className="main-page">
      <div className="header-outer">
        <div className="header-container">
          <Heading lines={[...headingText]} />
        </div>
        <small
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setTimeout(() => setHover(false), 1000)}
        >
          Javascript
          <p className={hover ? 'vibrate' : ''}>Mid</p>\ 
          React.js{' '}
          <p className={hover ? 'vibrate' : ''}>Mid</p>\
          Next.js{' '}
          <p className={hover ? 'vibrate' : ''}>Mid</p>\
          Vue.js{' '}
          <p className={hover ? 'vibrate' : ''}>Mid</p>\
          Javascript{' '}
          <p className={hover ? 'vibrate' : ''}>Mid</p>\
          Flutter{' '}
          <p className={hover ? 'vibrate' : ''}>Mid</p>\
          HTML{' '}
          <p className={hover ? 'vibrate' : ''}>Experienced</p>\
          CSS{' '}
          <p className={hover ? 'vibrate' : ''}>Experienced</p>\
          Tailwind{' '}
          <p className={hover ? 'vibrate' : ''}>Experienced</p>\
          SCSS{' '}
          <p className={hover ? 'vibrate' : ''}>Mid</p>
        </small>
      </div>
      <div className="content">
        <Button classname="button-fill" onClick={() => handleClick('/contact')}>
          Contact Me!
        </Button>
      </div>
    </section>
  )
}

export default MainPage
