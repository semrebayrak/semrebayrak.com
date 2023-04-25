import { FC, useState } from 'react'
import { PContainer } from '../assets/images'
import Heading from '../components/Heading'
export const About: FC = () => {
  const [hover, setHover] = useState(false)

  return (
    <section className="about">
      <div className="about-heading">
        <div className="heading-text">
          <Heading lines={['About me'.split(' ')]} />
        </div>
        <div className="image-wrapper">
          <div className="picture-wrapper">
            <img
              className="selfie"
              src={require('../assets/images/self.jpg')}
              alt="selfie"
            />
            <PContainer className="picture-background" />
          </div>
        </div>
      </div>
      <div
        className={'about-me-text' + (hover ? ' highlight' : '')}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setTimeout(() => setHover(false), 1700)}
      >
        Hi, my name is Emre Bayrak, and I'm a 24-year-old software developer with a
        passion for building innovative projects and exploring new cultures.
        I grew up in both Turkey and Hungary,
        where I completed my high school education before earning my Bachelor's degree in {' '}
        <span>Computer Engineering</span> from{' '}
        <span>Dokuz Eylul University</span> in Turkey with a GPA of 2.92.

        <p> Currently, I'm pursuing my Master's degree in <span>Computer Science</span>{' '}
          at <span>Harrisburg University </span> {' '}in the United States. Alongside my studies,
          I have gained over 4 years of experience working as both a freelance and full-time software developer,
          and I have also worked on several personal projects to expand my knowledge and skills in front-end, back-end, and web3 integrated projects.
        </p>

        <p>
          Throughout my travels, which have taken me to more than{' '}<span>20 countries</span>, I have been able to
          broaden my perspective and develop my social skills. I believe that my strong communication skills,
          as well as my experience interacting with people from different cultures, have enhanced my ability
          to work effectively in teams and to lead others.
        </p>

        <p>
          In addition to my technical expertise, I'm also passionate about {' '}<span>Project Management</span>,
          and I have pursued additional education and research in this field. My diverse experiences and
          love of technology have given me a unique perspective and skill set, which I'm excited to apply
          to new and challenging projects in the future.
        </p>
      </div>
    </section>
  )
}

export default About
