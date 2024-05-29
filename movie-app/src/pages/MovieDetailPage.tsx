import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // Import Link
import { getMovieDetails, getMovieVideos } from '../services/api';
import { Movie } from '../types/movie';
import RateStars from '../components/RateStars';
import '../styles/MovieDetailPage.scss';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extracts movie ID from URL params
  const navigate = useNavigate(); // Provides navigation functionality
  const [movie, setMovie] = useState<Movie | null>(null); // Holds movie data
  const [videoKey, setVideoKey] = useState<string | null>(null); // Holds YouTube video key

  useEffect(() => {
    // Clears movie and videoKey state when id changes
    setMovie(null);
    setVideoKey(null);

    // Fetches movie details when component mounts or ID changes
    if (!id) {
      navigate('/'); // Redirects to homepage if no ID is provided
      return;
    }

    const fetchMovieDetails = async () => {
      const movieData = await getMovieDetails(id); // Retrieves movie details from API
      setMovie(movieData); // Sets movie state with retrieved data
    };

    fetchMovieDetails(); // Calls function to fetch movie details
  }, [id, navigate]);

  useEffect(() => {
    // Fetches movie videos when component mounts or ID changes
    const fetchMovieVideos = async () => {
      const videos = await getMovieVideos(id); // Retrieves movie videos from API
      if (videos && videos.length > 0) {
        setVideoKey(videos[0].key); // Sets video key state with retrieved data
      }
    };

    if (id) {
      fetchMovieVideos(); // Calls function to fetch movie videos
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>; // Displays loading message while movie data is being fetched
  }

  return (
    <div className="movie-detail-page">
      <div className="movie-img">
        {movie.poster_path && (
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        )}
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1> {/* Displays movie title */}
        <div>
          {typeof movie.vote_average === 'number' && <RateStars rating={movie.vote_average} />} {/* Displays movie rating using RateStars component */}
          {movie.vote_average}
          {movie.release_date && <p>Release Date: {movie.release_date}</p>} {/* Displays movie release date */}
        </div>
        {videoKey && (
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        {movie.overview && <p>{movie.overview}</p>} {/* Displays movie overview */}
        {/* Adds back link to navigate to previous page */}
        <Link to="/" className="back-button">
          Back
        </Link>
      </div>
    </div>
  );
};

export default MovieDetailPage;
