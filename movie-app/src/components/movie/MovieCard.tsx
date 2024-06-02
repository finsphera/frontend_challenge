import { Star } from 'lucide-react'
import Link from 'next/link'
import { Movie } from '@/types/'
import { useFavoriteStore } from '@/stores/favoritesStore'
import { cn } from '@/lib/utils'
import { useToast } from '@/components/ui/use-toast'

export const MovieCard = (movie: Movie) => {
  const { title, poster_url, vote_average, id } = movie
  const addFavorite = useFavoriteStore(state => state.addFavorite)
  const removeFavorite = useFavoriteStore(state => state.removeFavorite)
  const { toast } = useToast()

  const isFavorite = useFavoriteStore(state => state.movies).some(favorite => favorite.id === id)

  function handleFavorite(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (isFavorite) removeFavorite(id)
    else addFavorite(movie)
    toast({
      title: isFavorite ? 'Removed from favorites' : 'Added to favorites',
    })
  }

  return (
    <Link
      href={`/movie/${id}`}
    >
    <div className="bg-gradient-to-b from-primary rounded-lg relative max-w-[100px] min-h-[145px] sm:max-w-[176px] sm:min-h-[265px] overflow-hidden w-full flex-none">
      <div
        style={{ backgroundImage: `url(${poster_url})` }}
        className="w-full h-full bg-center bg-cover transition duration-500 min-h-[145px] sm:min-h-[265px]">
      </div>
      
      <div
        className="min-h-[145px] sm:min-h-[265px] absolute top-0 opacity-0 hover:opacity-100 hover:backdrop-blur-md transition duration-500 grid items-center text-center w-full text-white"
      >
        <button onClick={handleFavorite} className='absolute top-2 right-2 z-30'>
          <Star 
            className={
              cn(
                'w-6 h-6 text-primary',
                isFavorite && 'fill-primary'
              )
            }
          />
        </button>
        <p className="text-sm sm:text-xl">
          { title }
        </p>
        <div className="h-10 w-10 flex justify-center items-center rounded-full bg-primary font-black m-auto">{vote_average.toFixed(1)}</div>
      </div>
    </div>
    </Link>
  )
}
