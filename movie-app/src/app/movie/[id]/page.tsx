import { getMovieDetails, getMovieCredits } from '@/services/IMDBService'
import { Hero } from '@/components/hero'
import { MovieInformation } from '@/components/movie/MovieInformation'
import { FavoriteButton } from '@/components/FavoriteButton'

type Props = {
  params: {
    id: number
  }
}

export default async function Page({ params: { id } }: Props) {
  const [movie, cast] = await Promise.all([getMovieDetails(id), getMovieCredits(id)])

  const releaseDate = new Date(movie.release_date).toLocaleDateString('en-US')

  return (
    <>
      <Hero
        title={movie.title}
        image={movie.backdrop_url}
        description={movie.overview}
        href={`/movie/${movie.id}`}
      >
        <div className="max-w-3xl">
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black max-w-3xl leading-loose mb-5">{ movie.title }</p>
          <div className="sm:text-base flex items-center gap-5 text-xl py-2">
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-primary font-black">{movie.vote_average.toFixed(1)}</div>
            <p className="font-bold md:w-auto">{ releaseDate }</p>
            <FavoriteButton 
              movie={movie}
              className="static"
            />
          </div>
        </div>
          <p className="text-lg sm:text-xl max-w-4xl lg:mb-8 mb-8 line-clamp-4"> { movie.overview } </p>
      </Hero>
      <MovieInformation
        production_companies={movie.production_companies || []}
        cast={cast}
      />
    </>
  )
}
