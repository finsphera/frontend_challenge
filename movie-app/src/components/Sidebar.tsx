import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchModal from './SearchModal';
import '../styles/Sidebar.scss';

interface SidebarProps {
    onSearchIconClick: () => void;
  }

const Sidebar: React.FC<SidebarProps> = ({ onSearchIconClick }) => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleHomeClick = () => {
    navigate(0);
    navigate('/');
  };
  

  const closeSearchModal = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="sidebar">
      <button onClick={handleHomeClick} className="icon-button">
        <FontAwesomeIcon icon={faHome} size="2x" />
      </button>
      
      <button onClick={onSearchIconClick} className="icon-button">
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </button>

      <SearchModal isOpen={isSearchOpen} onClose={closeSearchModal} />
    </div>
  );
};

export default Sidebar;
