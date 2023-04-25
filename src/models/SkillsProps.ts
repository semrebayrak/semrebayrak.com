import { ReactComponentElement, ReactSVGElement } from "react"

export interface SkillsProps {
  category: string
  value: string
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  percentage?: number
}
