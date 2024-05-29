import React from 'react';
import './RateStars.scss';

interface RateStarsProps {
  rating: number; // Rating value to be displayed
}

const RateStars: React.FC<RateStarsProps> = ({ rating }) => {
  // Function to render star icons based on rating
  const renderStars = (): JSX.Element[] => {
    const stars = [];
    const filledStars = Math.round(rating / 2); // Calculate the number of filled stars based on rating
    // Loop to create star elements
    for (let i = 1; i <= 5; i++) {
      // Check if the current star should be filled or empty based on the rating
      if (i <= filledStars) {
        // Add filled star icon
        stars.push(<span key={i} className="star filled">&#9733;</span>);
      } else {
        // Add empty star icon
        stars.push(<span key={i} className="star">&#9733;</span>);
      }
    }
    return stars; // Return the array of star elements
  };

  return <div className="rate-stars">{renderStars()}</div>; // Render the star icons
};

export default RateStars;
