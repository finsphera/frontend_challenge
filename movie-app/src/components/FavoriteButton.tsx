'use client'

import { cn } from '@/lib/utils'
import { useFavorites } from '@/hooks/useFavorites'
import { Movie } from '@/types'
import { Star } from 'lucide-react'

export const FavoriteButton = ({ movie, className }: { movie: Movie, className: string }) => {
    const { isFavorite, handleFavorite } = useFavorites(movie)
    return (
    <button onClick={(e) => {
      e.preventDefault()
      handleFavorite()
    }}className={cn('absolute top-2 right-2 z-30', className)}>
        <Star 
          className={
            cn(
              'w-6 h-6 text-primary',
              isFavorite && 'fill-primary'
            )
          }
        />
      </button>
  )
}
