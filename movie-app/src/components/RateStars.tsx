// RateStars.tsx
import React from 'react';
import '../styles/RateStars.scss';

interface RateStarsProps {
  rating: number;
}

const RateStars: React.FC<RateStarsProps> = ({ rating }) => {
  const renderStars = (): JSX.Element[] => {
    const stars = [];
    const filledStars = Math.round(rating / 2); // Calcular el número de estrellas llenas
    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        stars.push(<span key={i} className="star filled">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9733;</span>);
      }
    }
    return stars;
  };

  return <div className="rate-stars">{renderStars()}</div>;
};

export default RateStars;
