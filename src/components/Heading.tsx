import { Fragment } from 'react'
import P from './P'
import { HeadingProps } from '../models/HeadingProps'
const Heading = ({ lines }: HeadingProps) => {
  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={index}>
          <h1 className="header">
            {line.map((word, index) => (
              <div className="word-wrapper" key={index}>
                {word.split('').map((letter, index) => (
                  <P letter={letter} key={index} />
                ))}
              </div>
            ))}
          </h1>
          <br />
        </Fragment>
      ))}
    </>
  )
}

export default Heading
