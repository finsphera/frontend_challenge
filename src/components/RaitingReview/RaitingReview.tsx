import React from 'react'
import styled from 'styled-components'

const Star = styled.span<{
  rating?: number
  star: number
}>`
  cursor: 'pointer';
  color: ${(props) => props.rating && props.rating / 2 >= props.star ? '#04abad' : 'gray'};
  font-size: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`

export interface IRaitingReview {
  rating?: number 
}

const RatingReview = ({ rating }: IRaitingReview) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, i) => (
        <Star
          key={i}
          {...{
            star,
            rating
          }}
        >
          {' '}
          ★{' '}
        </Star>
      ))}
    </div>
  )
}

export default RatingReview
