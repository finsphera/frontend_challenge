import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import MovieDetailPage from './pages/MovieDetailPage';
import Sidebar from './components/Sidebar';
import SearchModal from './components/SearchModal';
import './App.scss';

const App: React.FC = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  // Function to handle click on search icon
  const handleSearchIconClick = () => {
    setIsSearchModalOpen(true); // Open the search modal
  };

  // Function to handle closing of the search modal
  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false); // Close the search modal
  };

  return (
    <Router>
      <div className="app">
        {/* Pass the handleSearchIconClick function as a prop */}
        <Sidebar onSearchIconClick={handleSearchIconClick} />
        {/* Main content with conditional class based on search modal state */}
        <div className={`main-content ${isSearchModalOpen ? 'search-modal-open' : ''}`}>
          <Routes>
            <Route path="/" element={<MoviesPage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
          </Routes>
        </div>
        {/* Search modal component with isOpen and onClose props */}
        <SearchModal isOpen={isSearchModalOpen} onClose={handleCloseSearchModal} />
      </div>
    </Router>
  );
};

export default App;
