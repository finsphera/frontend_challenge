import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieCard from './MovieCard';
import { Movie } from '../../types/movie';

// Define a mock movie object for testing
const mockMovie: Movie = {
  id: 1,
  title: 'Mock Movie',
  overview: 'This is a mock movie overview.',
  poster_path: '/mockposter.jpg',
  backdrop_path: '/mockbackdrop.jpg',
  release_date: '01-01-2021',
  vote_average: 8.5,
};

// Test case: renders MovieCard component without header
test('renders MovieCard component without header', () => {
  render(
    <Router>
      <MovieCard movie={mockMovie} />
    </Router>
  );

  // Assert that the movie title is rendered
  expect(screen.getByText('Mock Movie')).toBeInTheDocument();

  // Assert that the movie release date is rendered
  expect(screen.getByText('2021')).toBeInTheDocument();
  
  // Assert that the movie vote average is rendered
  expect(screen.getByText('8.5')).toBeInTheDocument();

  // Assert that the movie image is rendered and has the correct source
  const imgElement = screen.getByAltText('Mock Movie');
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/mockposter.jpg');

  // Optionally print the DOM content in case of failure
  screen.debug();
});

// Test case: renders MovieCard component with header
test('renders MovieCard component with header', () => {
  render(
    <Router>
      <MovieCard movie={mockMovie} isHeader={true} />
    </Router>
  );
  
  // Assert that the movie title is rendered
  expect(screen.getByText('Mock Movie')).toBeInTheDocument();

  // Assert that the movie release date is rendered
  expect(screen.getByText('2021')).toBeInTheDocument();
  
  // Assert that the movie vote average is rendered
  expect(screen.getByText('8.5')).toBeInTheDocument();

  // Assert that the movie overview is rendered
  expect(screen.getByText('This is a mock movie overview.')).toBeInTheDocument();
  
  // Optionally print the DOM content in case of failure
  screen.debug();
});
