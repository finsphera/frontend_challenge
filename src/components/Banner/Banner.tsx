import { IMovieData, IReviews } from '@/types/Movies'
import React, { useEffect, useState } from 'react'
import S from './banner.styles'
import { insecureFetchFromAPI } from '@/requests/api'
import { REQUESTS } from '@/utils/constants'
import RatingReview from '../RaitingReview/RaitingReview'

interface IBanner {
  randomMovie: IMovieData
}

const Banner = ({ randomMovie }:IBanner) => {
  const [reviews, setReviews] = useState<IReviews>({
    id: 0,
    total_results: 0
  })

  useEffect(() => {
    insecureFetchFromAPI(REQUESTS.getMovieReviews(randomMovie.id)).then(({data}) => {
      setReviews(data)
    }).catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <S.Header backdroppath={randomMovie?.backdrop_path}>
      <S.Contents>
        <S.MovieTitle>
          {randomMovie?.title || randomMovie?.original_title}
        </S.MovieTitle>
        <S.MovieStats>
          <S.Stat>
            <RatingReview
              rating={randomMovie?.vote_average}
            />
          </S.Stat>
          <S.Stat>•</S.Stat>
          <S.Stat>
            {reviews.total_results} Reviews
          </S.Stat>
          <S.Stat>•</S.Stat>
          <S.Stat>
            {randomMovie?.release_date?.slice(0,4)}
          </S.Stat>
        </S.MovieStats>
        <S.MovieDescription>
          {randomMovie?.overview}
        </S.MovieDescription>
      </S.Contents>
    </S.Header>
  )
}

export default Banner
