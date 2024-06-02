import { useEffect, useState } from 'react'
import { getMoviesByGenre } from '@/services/IMDBService'
import { Movie } from '@/types'

export function useMoviesByGenre(genreId: number) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState('initial')
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    async function fetchMovies() {
      try {
        if (page > 1) {
          setLoading('loading')
        }
        const moviesResponse = await getMoviesByGenre({ genreId, page })

        if (page === moviesResponse.total_pages) {
          setHasMore(false)
        }

        setMovies((prevMovies) => [...prevMovies, ...moviesResponse.results])

      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setLoading('completed')
      }
    }

    fetchMovies()
  }, [page, genreId])

  function handlerMoviesByGenre() {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  return { movies, loading, error, handlerMoviesByGenre }
}

