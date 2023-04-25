import { useCallback, useEffect, useState, FC } from 'react'
import { Experience, ExperienceCardProps } from '../../models/Experience'
import Card from '../../components/card/Card'
const ExperienceCard: FC<ExperienceCardProps> = ({
  item,
  setContent,
  contentIndex,
  setContentIndex,
  index,
}) => {
  const [image, setImage] = useState()
  const loadImage = useCallback(async () => {
    return await import(`../../assets/companies/${item.logoPath}`).then(img =>
      setImage(img.default),
    )
  }, [item.logoPath])
  useEffect(() => {
    loadImage()
  }, [loadImage])

  const handleReaction = () => {
    if (contentIndex === index)
      return
    setContentIndex(prev => (prev === index ? null : index))
    setContent(
      (prevContent: Experience | null): Experience | null => {
        return prevContent === item ? null : item
      },
    )
  }



  return (
    <Card isActive={index === contentIndex}
      onMouseEnter={() => {
        handleReaction()
      }
      }
      onClick={() => {
        handleReaction()
      }
      } className="mt-2">
      {image && <img src={image} alt="logo" className="company-logo" />}
    </Card>
  )
}

export default ExperienceCard
