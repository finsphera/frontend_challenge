import axios from 'redaxios'
import type { Genre, Movie, ResponseDiscoverMovie } from '../types'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_IMDB_BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMDB_API_KEY}`
  }
})

export const getGenres = async (): Promise<Genre[]> => {
  try {
    const response = await api.get('/genre/movie/list')
    return response?.data.genres
  } catch (error) {
    throw new Error('Error fetching genres')
  }
}

export const getMoviesByGenre = async (genreId: number): Promise<ResponseDiscoverMovie> => {
  try {
    const { data }: { data: ResponseDiscoverMovie } = await api.get('/discover/movie', {
      params: {
        with_genres: genreId
      }
    })

    const Movies: Movie[] = data.results.map((movie: Movie) => {
      return {
        ...movie,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      }
    })

    return {
      ...data,
      results: Movies
    }
  } catch (error) {
    throw new Error('Error fetching movies by genre')
  }
}

export const getMovieDetails = async (id: number): Promise<Movie> => {
  try {
    const { data }: { data: Movie } = await api.get(`/movie/${id}`)
    return {
      ...data,
      poster_url: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      backdrop_url: `https://image.tmdb.org/t/p/original${data.backdrop_path}`
    }
  } catch (error) {
    throw new Error('Error fetching movie details')
  }
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const { data }: { data: ResponseDiscoverMovie } = await api.get('/movie/popular')
    return data.results.map((movie: Movie) => {
      return {
        ...movie,
        poster_url: `https://image.tmdb.org/t/p/original${movie.poster_path}`
      }
    })
  } catch (error) {
    throw new Error('Error fetching popular movies')
  }
}
