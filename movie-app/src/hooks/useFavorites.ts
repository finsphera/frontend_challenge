import { useCallback } from 'react'
import { useFavoriteStore } from '@/stores/favoritesStore'
import { useToast } from '@/components/ui/use-toast'
import { Movie } from "@/types"

export const useFavorites = (movie: Movie) => {
  const addFavorite = useFavoriteStore(state => state.addFavorite)
  const removeFavorite = useFavoriteStore(state => state.removeFavorite)
  const { toast } = useToast()

  const isFavorite = useFavoriteStore(state => state.movies).some(favorite => favorite.id === movie.id)

  const handleFavorite = useCallback(() => {
    if (isFavorite) removeFavorite(movie.id)
    else addFavorite(movie)
    toast({
      title: isFavorite ? 'Removed from favorites' : 'Added to favorites',
    })
  }, [movie, isFavorite])

  return {
    isFavorite,
    handleFavorite
  }
}
