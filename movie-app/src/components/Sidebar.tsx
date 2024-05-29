import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchModal from './SearchModal';
import '../styles/Sidebar.scss';

interface SidebarProps {
    onSearchIconClick: () => void; // Function to handle click on search icon
}

const Sidebar: React.FC<SidebarProps> = ({ onSearchIconClick }) => {
  const navigate = useNavigate(); // Function for navigation
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false); // State to manage search modal visibility

  // Function to handle click on home icon
  const handleHomeClick = () => {
    navigate(0); // Navigates to top of page
    navigate('/'); // Navigates to homepage
  };

  // Function to close the search modal
  const closeSearchModal = () => {
    setIsSearchOpen(false); // Sets search modal state to false
  };

  return (
    <div className="sidebar">
      {/* Button for home icon */}
      <button onClick={handleHomeClick} className="icon-button">
        <FontAwesomeIcon icon={faHome} size="2x" />
      </button>
      
      {/* Button for search icon */}
      <button onClick={onSearchIconClick} className="icon-button">
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </button>

      {/* Search modal component */}
      <SearchModal isOpen={isSearchOpen} onClose={closeSearchModal} />
    </div>
  );
};

export default Sidebar;
