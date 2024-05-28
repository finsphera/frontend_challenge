import React from 'react'
import styled from 'styled-components'
import { AiTwotoneStar } from "react-icons/ai";

const Star = styled.span<{
  rating?: number
  star: number
}>`
  cursor: 'pointer';
  font-size: 1rem;

  path:first-child {
    fill: ${(props) => props.rating && props.rating / 2 >= props.star ? '#04abad' : 'transparent'};
  }

  path:last-child {
    fill: ${(props) => props.rating && props.rating / 2 >= props.star ? '#04abad' : '#04abad'};
  }
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
          <AiTwotoneStar />{' '}
        </Star>
      ))}
    </div>
  )
}

export default RatingReview
