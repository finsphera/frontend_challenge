'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Genre, Movie } from '@/types/'
import { MovieCard } from './MovieCard'
import { MoviePlaceHolder } from './MoviePlaceHolder'
import { useMoviesByGenre } from '@/hooks/useMoviesByGenre'
import { useMoviesCarousel } from '@/hooks/useMoviesCarousel'
import { useId } from 'react'

const chunkArray = (array: Movie[], size: number) => {
  const chunked_arr = []
  let index = 0
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index))
    index += size
  }
  return chunked_arr
}

const elements = 12

const CaraouselItemPlaceholder = () => {
  return (
  <CarouselItem
    className="grid grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-4 grow"
  >
    {
      Array.from({ length: 12 }, (_, i) => i).map((_, index) => <MoviePlaceHolder key={index} />)
    }
  </CarouselItem>
  )
}

const CaraouselItemMovies = ({ movies, loading }: { movies: Movie[], loading: string }) => {
  return (
    <CarouselItem
      className="grid grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-4 grow"
    >
      {
        movies.map((movie, index) => {
          if (movies.length < elements && loading && (index === movies.length - 1) ) {
            const placeHolderElements = Array.from({ length: elements - movies.length }, (_, i) => i)
            return placeHolderElements.map((_, index) => <MoviePlaceHolder key={index} />)
          }

          return <MovieCard key={movie.title} {...movie} />
      })}

    </CarouselItem>
  )
}

export const MovieListByGenre = ({ id, name }: Genre) => {
  const { loading, movies, error, handlerMoviesByGenre } = useMoviesByGenre(id)
  const { setApi } = useMoviesCarousel({ onLoad: handlerMoviesByGenre })

  const customId = useId()
  const moviesChunk = chunkArray(movies, elements)
  
  return (
    <section
      className="container px-4 py-8 w-full mx-auto w-max-full"
    >
      <div className="text-3xl text-primary py-4 uppercase font-semibold">{ name }</div>
      <Carousel className='flex items-center justify-center gap-5' setApi={setApi}>
        <CarouselPrevious className='static' />
        <CarouselContent> 
          { loading === 'initial' && <CaraouselItemPlaceholder /> }
          { moviesChunk.map((moviesList, index) => <CaraouselItemMovies key={`${customId + index}`} movies={moviesList} loading={loading} />) }

        </CarouselContent>
        <CarouselNext className='static' />
      </Carousel>
    </section>
  )
}
// 
