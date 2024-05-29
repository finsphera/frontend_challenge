import React, { useState } from 'react';
import { getMoviesByQuery } from '../services/api';
import { Movie } from '../types/movie';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import '../styles/SearchModal.scss';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length >= 3) {
      const results = await getMoviesByQuery(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="search-input-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for movies..."
            className="search-input"
          />
        </div>
        <div className="search-results">
          {searchResults.map(movie => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="search-result" onClick={onClose}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
