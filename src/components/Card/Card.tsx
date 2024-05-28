import { BASEURL } from '../../utils/constants'
import S from './card.styles'

interface ICard {
  alt: string
  imageUrl: string
}

const Card = ({ alt, imageUrl }: ICard) => {
  return (
    <S.Card>
      <S.CardImage
        alt={alt}
        src={`${BASEURL}${imageUrl}`}
      />
    </S.Card>

  )
}

export default Card
