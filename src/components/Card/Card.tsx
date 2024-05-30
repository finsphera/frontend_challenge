import { IResponseData } from '@/types/Request'
import { BASEURL } from '../../utils/constants'
import S from './card.styles'

interface ICard {
  alt: string | undefined
  imageUrl: string
  title: string
  handleCardClick: (id: number) => void
  id: number
}

const Card = ({ alt, imageUrl, title, handleCardClick, id }: ICard) => {
  return (
    <S.Card>
      <S.CardImage
        alt={alt}
        src={`${BASEURL}${imageUrl}`}
        onClick={() => handleCardClick(id)}
      />
      {
        title &&
        <S.Name>{title}</S.Name>
      }
    </S.Card>
  )
}

export default Card
