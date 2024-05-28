import { BASEURL } from '../../utils/constants'
import S from './card.styles'

interface ICard {
  alt: string | undefined
  imageUrl: string
  title: string
  handleCardClick: (title: string) => void
}

const Card = ({ alt, imageUrl, title, handleCardClick }: ICard) => {
  return (
    <S.Card>
      <S.CardImage
        alt={alt}
        src={`${BASEURL}${imageUrl}`}
        onClick={() => handleCardClick(title)}
      />
      {
        title &&
        <S.Name>{title}</S.Name>
      }

    </S.Card>

  )
}

export default Card
