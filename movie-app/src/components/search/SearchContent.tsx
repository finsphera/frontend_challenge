'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { searchMovies } from '@/services/IMDBService'
import { Movie } from '@/types'
import { MovieCard } from '@/components/movie/MovieCard'

export const SearchContent = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await searchMovies(search)
      setMovies(data)
    }
    fetchMovies()
  }, [search])

  return (
    <div className='flex flex-col gap-5'>
      <div className='relative'>
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search movies..."
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='min-h-[400px] max-h-[400px] overflow-y-auto'>
        {
          movies.length === 0 && (
          <div className='flex justify-center items-center h-full text-lg text-muted-foreground'>
            No movies found
          </div>
          )
        }
        <div className='grid grid-cols-3 lg:grid-cols-3 grid-rows-2 gap-4 grow'>
        { movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
        </div>
      </div>
    </div>
  )
}
