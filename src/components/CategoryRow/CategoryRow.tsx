import React, { useState } from 'react'
import S from './categoryrow.styles'
import { IResponseData } from '@/types/Request'
import Card from '../Card/Card'
import YouTube from 'react-youtube'
import MovieTrailer from 'movie-trailer'
import { TEASER_OPTIONS } from '@/utils/constants'

interface ICategoryRow {
  title: string
  data: IResponseData[]
}

const CategoryRow = ({title, data}: ICategoryRow) => {
  const [trailerUrl, setTrailerUrl] = useState<string | null>("")

  const handleCardClick = (title: string) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      MovieTrailer(title).then(url => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      }).catch((error) => console.log(error))
    }
  }

  return (
    <S.Container>
      <S.CategoryInfo>
        <S.CategoryTitle>{title}</S.CategoryTitle>
        <S.CategoryLink>Mostrar mas</S.CategoryLink>
      </S.CategoryInfo>
      <S.CategoryMovies>
        {
          data.map(item => (
            <Card
              key={item.id}
              alt={item.original_title}
              imageUrl={item.backdrop_path}
              title={item.original_title || item.name}
              handleCardClick={handleCardClick}
            />
          ))
        }
      </S.CategoryMovies>
      {trailerUrl &&
        <S.Teaser>
          <YouTube videoId={trailerUrl} opts={TEASER_OPTIONS}/>
        </S.Teaser>
      }
    </S.Container>
  )
}

export default CategoryRow
