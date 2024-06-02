import { Movie } from '@/types'
import { create } from 'zustand'

interface FavoritesState {
  movies: Movie[]
  addFavorite: (movie: Movie) => void,
  removeFavorite: (id: number) => void
}

export const useFavoriteStore = create<FavoritesState>((set) => ({
  movies: [],
  addFavorite: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
  removeFavorite: (id) => set((state) => ({ movies: state.movies.filter((movie) => movie.id !== id) }))
}))
