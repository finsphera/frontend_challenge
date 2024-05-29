// src/components/MovieCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../types/movie';
import RateStars from '../components/RateStars';
import '../styles/MovieCard.scss';

const MovieCard: React.FC<{ movie: Movie; isHeader?: boolean }> = ({ movie, isHeader = false }) => {
  const navigate = useNavigate();

  // Formatear la fecha para mostrar solo el año y el mes
  const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const voteAverage = typeof movie.vote_average === 'number' ? parseFloat(movie.vote_average.toFixed(1)) : '';

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div 
      className={`movie-card ${isHeader ? 'movie-header' : ''}`} 
      style={isHeader ? { backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 28%, rgba(255,255,255,0) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` } : undefined}
      onClick={handleCardClick}
    >
      {!isHeader && <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />}
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <div className='rate'>
          <RateStars rating={movie.vote_average} />
          <span>|</span>
          <span>{voteAverage}</span> 
          <span>|</span>
          <span>{formatDate(movie.release_date)}</span>
        </div>
        {isHeader && <span className="overview">{movie.overview}</span>}
      </div>
    </div>
  );
};

export default MovieCard;
