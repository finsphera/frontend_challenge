import React, { useState } from 'react';
import { getMoviesByQuery } from '../services/api';
import { Movie } from '../types/movie';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import '../styles/SearchModal.scss';

interface SearchModalProps {
  isOpen: boolean; // Indicates whether the search modal is open or closed
  onClose: () => void; // Function to handle closing the search modal
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>(''); // State to store search query
  const [searchResults, setSearchResults] = useState<Movie[]>([]); // State to store search results

  // Function to handle search input change
  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value; // Get the value from the input field
    setSearchQuery(query); // Update the search query state
    if (query.length >= 3) { // Check if the query length is at least 3 characters
      const results = await getMoviesByQuery(query); // Fetch movies based on the query
      setSearchResults(results); // Update the search results state
    } else {
      setSearchResults([]); // Clear the search results if the query length is less than 3 characters
    }
  };

  // Render nothing if the modal is closed
  if (!isOpen) {
    return null;
  }

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="search-input-container">
          {/* Search input field */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for movies..."
            className="search-input"
          />
        </div>
        <div className="search-results">
          {/* Render search results as movie cards */}
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
