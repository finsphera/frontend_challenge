import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MovieCard } from '../components/movie/MovieCard'
import { Movie } from '../types/'
import '@testing-library/jest-dom/vitest'

const mockMovie: Movie = {
  id: 1,
  title: 'My Movie',
  overview: 'This is a mock movie overview.',
  poster_path: '/mockposter.jpg',
  poster_url: 'https://mockposter.jpg',
  backdrop_url: 'https://mockbackdrop.jpg',
  backdrop_path: '/mockbackdrop.jpg',
  release_date: '02-06-2024',
  vote_average: 8.5
}

describe('Movie Component', () => {
  it('renders the movie title, and vote_average', () => {
    render(<MovieCard {...mockMovie} />)

    expect(screen.getByText(/My Movie/i)).toBeInTheDocument()
    expect(screen.getByText(/8.5/gi)).toBeInTheDocument()
  })
})
