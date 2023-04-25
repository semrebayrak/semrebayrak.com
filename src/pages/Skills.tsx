import { FC, useEffect, useState } from 'react'
import { exp } from '../sections/skills/Explanation'
import { SkillsList } from '../sections/skills/SkillsList'
import Thoughts from '../sections/skills/Thoughts'
import TagsCanvas from 'react-tags-canvas'
import Heading from '../components/Heading'



const Skills: FC = () => {

  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const categories = SkillsList.reduce((acc, skill) => {
      if (!acc.includes(skill.category)) {
        acc.push(skill.category)
      }
      return acc
    }, [] as string[])
    setCategories(categories)
  }, [])

  return (
    <section className="skills" >

      <div className='skill-category'>
        {
          categories.map((category, index) => {
            return (
              <div className='skill' key={index}>
                <div className='skill-category'>
                  <h3>{category}</h3>
                </div>
                <div className='skills-col'>
                  {
                    SkillsList.filter((item) => item.category === category).map((item, index) => {
                      return (
                        <div className='skill-item' key={index}>
                          <div className='skill-item-name'>
                            <h4>{item.value}</h4>
                          </div>
                          {
                            <item.image
                              width={40}
                              height={40}
                            />
                          }

                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>

    </section >
  )
}

export default Skills
