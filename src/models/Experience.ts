import { Dispatch, SetStateAction } from 'react'

export interface Experience {
  logoPath: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
  jobTitle: string
  head: string
  technologies: string[]
}

export interface ExperienceCardProps {
  setContent: Dispatch<SetStateAction<Experience | null>>
  item: Experience
  setContentIndex: Dispatch<SetStateAction<number | null>>
  contentIndex: number | null
  index: number
}

export interface ExperienceDetailsProps {
  item: Experience | null
  style?: React.CSSProperties
}
