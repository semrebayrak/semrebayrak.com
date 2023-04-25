import { FC, useEffect, useState } from 'react'
import { Experience as ExperienceModel } from '../models/Experience'
import ExperienceDetails from '../sections/experience/ExperienceDetails'
import ExperienceCard from '../sections/experience/ExperienceCard'
import { ExperienceList } from '../sections/experience/ExperienceList'
import { Transition } from 'react-transition-group'
import Heading from '../components/Heading'

const transitions = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
}
export const Experience: FC = () => {
  const [content, setContent] = useState<ExperienceModel | null>(null)
  const [contentIndex, setContentIndex] = useState<number | null>(null)


  return (
    <section className="experience">
      <div className='experience-header'>
        <Heading lines={['Experience'.split(' ')]} />
      </div>
      <div className="wrapper">
        <div className='experience-grid'>
          {ExperienceList.map((item: ExperienceModel, index: number) => (
            <ExperienceCard
              setContent={setContent}
              item={item}
              key={index}
              contentIndex={contentIndex}
              index={index}
              setContentIndex={setContentIndex}
            />
          ))}
        </div>
        <Transition in={!!content} timeout={0} unmountOnExit>
          {state => (
            <ExperienceDetails
              item={content}
              style={{
                transition: 'all .3s',
                ...transitions[state as keyof typeof transitions],
              }}
            />
          )}
        </Transition>
      </div>
    </section>
  )
}

export default Experience
