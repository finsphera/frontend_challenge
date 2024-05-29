import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/movie';
import '../styles/MoviePage.scss';

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // Holds movie data
  const [currentPage, setCurrentPage] = useState<number>(1); // Tracks current page number

  useEffect(() => {
    // Fetches popular movies when component mounts or current page changes
    const fetchMovies = async () => {
      const moviesData = await getPopularMovies(currentPage); // Retrieves popular movies from API
      setMovies(moviesData); // Sets movie state with retrieved data
    };

    fetchMovies(); // Calls function to fetch popular movies
  }, [currentPage]);

  const handleNextPage = async () => {
    // Handles click on next page button
    const nextPageMovies = await getPopularMovies(currentPage + 1); // Retrieves next page of movies

    if (nextPageMovies.length > 0) {
      setCurrentPage((prevPage) => prevPage + 1); // Updates current page if next page exists
    }
  };

  const handlePrevPage = () => {
    // Handles click on previous page button
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Updates current page, ensuring it doesn't go below 1
  };

  return (
    <div className="movies-page">
      <div className="movie-header">
        {/* Displays the most recent movie */}
        {movies.length > 0 && <MovieCard movie={movies[0]} isHeader />}
      </div>

      <div className="pagination">
        {/* Renders previous page button if current page is not the first */}
        {currentPage !== 1 && (
          <button onClick={handlePrevPage} >
            Previous
          </button>
        )}
        <button onClick={handleNextPage}>Next</button> {/* Renders next page button */}
      </div>

      <div className="movie-grid">
        {/* Renders the rest of the movies */}
        {movies.slice(1).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="pagination">
        {/* Renders previous page button if current page is not the first */}
        {currentPage !== 1 && (
          <button onClick={handlePrevPage} >
            Previous
          </button>
        )}
        <button onClick={handleNextPage}>Next</button> {/* Renders next page button */}
      </div>
    </div>
  );
};

export default MoviesPage;
