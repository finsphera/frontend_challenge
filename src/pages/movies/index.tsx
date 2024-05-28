import Banner from '@/components/Banner/Banner'
import CategoryRow from '@/components/CategoryRow/CategoryRow'
import { insecureFetchFromAPI } from '@/requests/api'
import { IMoviesResponse } from '@/types/Movies'
import { REQUESTS } from '@/utils/constants'
import { Random } from '@/utils/helpers'
import { GetServerSideProps } from 'next'
import React from 'react'

interface IMovies {
  popularMovies: IMoviesResponse
  upcomingMovies: IMoviesResponse
  topRatedMovies: IMoviesResponse
  nowPlayingMovie: IMoviesResponse
}

const Movies = ({
  popularMovies,
  upcomingMovies,
  topRatedMovies,
  nowPlayingMovie,
}: IMovies) => {
  return (
    <main
    style={{
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column'
    }}
  >
    <Banner
      randomMovie={Random(popularMovies.results)}
    />
    <CategoryRow
      data={popularMovies.results}
      title="Lo mas popular"
    />
    <CategoryRow
      data={upcomingMovies.results}
      title="Proximas peliculas"
    />
    <CategoryRow
      data={topRatedMovies.results}
      title="top rated peliculas"
    />
    <CategoryRow
      data={nowPlayingMovie.results}
      title="Peliculas en vivo"
    />
  </main>
  )
}

export default Movies

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const popularMoviesData = await insecureFetchFromAPI(REQUESTS.popularMovieList)
    const upcomingMoviesData = await insecureFetchFromAPI(REQUESTS.upcomingMovies)
    const topRatedmovieData = await insecureFetchFromAPI(REQUESTS.topRatedmovieList)
    const nowPlayingMoviesData = await insecureFetchFromAPI(REQUESTS.nowPlaingMovies)

    return {
      props: {
        popularMovies: popularMoviesData.data,
        upcomingMovies: upcomingMoviesData.data,
        topRatedMovies: topRatedmovieData.data,
        nowPlayingMovie: nowPlayingMoviesData.data
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        error: 'Failed to fetch data'
      }
    }
  }
}