'use client'
import { useFavoriteStore } from '@/stores/favoritesStore'
import { MovieCard } from './movie/MovieCard'
import { Star } from 'lucide-react'

export const FavoritesList = () => {
  const favorites = useFavoriteStore(state => state.movies)

  return (
    <>
      {
        favorites.length === 0 ?
          <div className='container text-center mt-10 text-primary'>
            <Star className='h-20 w-20 mx-auto'/>
            <p className='text-2xl'>You have no favorites yet</p>
            <p className='text-lg'>Add movies to your favorites by clicking the star icon</p>
          </div>
        : (
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 container'>
            {favorites.map(movie => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        )
      }
    </>
  )
}
