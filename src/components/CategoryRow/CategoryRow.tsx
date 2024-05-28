import React, { useEffect, useState } from 'react'
import S from './categoryrow.styles'
import { IMovieData } from '@/types/Movies'
import Card from '../Card/Card'
import { insecureFetchFromAPI } from '@/requests/api'

interface ICategoryRow {
  title: string
  data: IMovieData[]
}

const CategoryRow = ({title, data}: ICategoryRow) => {
  console.log(data)

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