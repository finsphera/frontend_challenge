import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import MovieDetailPage from './pages/MovieDetailPage';
import Sidebar from './components/Sidebar';
import SearchModal from './components/SearchModal';
import './App.scss';

const App: React.FC = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  const handleSearchIconClick = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <Router>
      <div className="app">
        {/* Pasamos la función handleSearchIconClick como prop */}
        <Sidebar onSearchIconClick={handleSearchIconClick} />
        <div className={`main-content ${isSearchModalOpen ? 'search-modal-open' : ''}`}>
          <Routes>
            <Route path="/" element={<MoviesPage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
          </Routes>
        </div>
        <SearchModal isOpen={isSearchModalOpen} onClose={handleCloseSearchModal} />
      </div>
    </Router>
  );
};

export default App;
