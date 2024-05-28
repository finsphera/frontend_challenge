import { BASEURL } from '../../utils/constants'
import S from './card.styles'

interface ICard {
  alt: string | undefined
  imageUrl: string
  title?: string
}

const Card = ({ alt, imageUrl, title }: ICard) => {
  return (
    <S.Card>
      <S.CardImage
        alt={alt}
        src={`${BASEURL}${imageUrl}`}
      />
      {
        title &&
        <S.Name>{title}</S.Name>
      }
    </S.Card>

  )
}

export default Card
