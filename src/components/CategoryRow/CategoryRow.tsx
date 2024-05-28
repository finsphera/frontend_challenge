import React from 'react'
import S from './categoryrow.styles'
import { IResponseData } from '@/types/Movies'
import Card from '../Card/Card'

interface ICategoryRow {
  title: string
  data: IResponseData[]
}

const CategoryRow = ({title, data}: ICategoryRow) => {
  return (
    <S.Container>
      <S.CategoryInfo>
        <S.CategoryTitle>{title}</S.CategoryTitle>
        <S.CategoryLink>Mostrar mas</S.CategoryLink>
      </S.CategoryInfo>
      <S.CategoryMovies>
        {
          data.map(movie => (
            <Card
              key={movie.id}
              alt={movie.original_title}
              imageUrl={movie.backdrop_path}
            />
          ))
        }
      </S.CategoryMovies>
    </S.Container>
  )
}

export default CategoryRow
