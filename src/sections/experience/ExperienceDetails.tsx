import { FC } from 'react'
import { ExperienceDetailsProps } from '../../models/Experience'
const ExperienceDetails: FC<ExperienceDetailsProps> = ({
  item,
  style,
}: ExperienceDetailsProps) => {
  return (
    <div className={'experience-details'} style={{ ...style }}>
      <p className="experience-details-title">{item?.jobTitle}</p>
      <p className="experience-details-description">{item?.description}</p>
      <p className="experience-details-date">
        {item?.startDate} {item?.endDate}
      </p>
      <p className="experience-details-date">{item?.location}</p>
      <p className="tech-stack"></p>
      <div className="tech-stack-wrapper">
        {item?.technologies.map((item: string, index: number) => (
          <p className="experience-details-tech" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ExperienceDetails
