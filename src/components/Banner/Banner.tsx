import { IMovieData } from '@/types/movies'
import React from 'react'
import S from './banner.styles'

interface IBanner {
  randomMovie: IMovieData
}

const Banner = ({ randomMovie }:IBanner) => {
  console.log('randomMovie', randomMovie)
  return (
    <S.Header backdroppath={randomMovie.backdrop_path}>
      <S.Contents>
        <S.MovieTitle>
          {randomMovie.title || randomMovie.original_title}
        </S.MovieTitle>
        <S.MovieStats>
          <S.Stat>
            {randomMovie.release_date.slice(0,4)}
          </S.Stat>
        </S.MovieStats>
        <S.MovieDescription>
          {randomMovie.overview}
        </S.MovieDescription>
      </S.Contents>
    </S.Header>
  )
}

export default Banner
