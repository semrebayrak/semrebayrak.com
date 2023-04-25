export interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  onMouseEnter?: () => void
  isActive?: boolean
}

export interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}
