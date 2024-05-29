// src/components/MovieCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../types/movie';
import RateStars from '../RateStars/RateStars';
import './MovieCard.scss';

// MovieCard component displays movie information in a card format.
const MovieCard: React.FC<{ movie: Movie; isHeader?: boolean }> = ({ movie, isHeader = false }) => {
  const navigate = useNavigate();

  // Function to format the release date of the movie
  const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // Variable to display the average vote for the movie
  const voteAverage = typeof movie.vote_average === 'number' ? parseFloat(movie.vote_average.toFixed(1)) : '';

  // Function to handle clicking on the movie card, navigates to the movie detail page
  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div 
      className={`movie-card ${isHeader ? 'movie-header' : ''}`} 
      style={isHeader ? { backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 28%, rgba(255,255,255,0) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` } : undefined}
      onClick={handleCardClick}
    >
      {/* Render movie image if not a header card */}
      {!isHeader && <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />}
      <div className='movie-info'>
        {/* Render movie title */}
        <h3>{movie.title}</h3>
        <div className='rate'>
          {/* Render movie rating using RateStars component */}
          <RateStars rating={movie.vote_average} />
          <span>|</span>
          {/* Render vote average */}
          <span>{voteAverage}</span> 
          <span>|</span>
          {/* Render formatted release date */}
          <span>{formatDate(movie.release_date)}</span>
        </div>
        {/* Render movie overview if header card */}
        {isHeader && <span className="overview">{movie.overview}</span>}
      </div>
    </div>
  );
};

export default MovieCard;
