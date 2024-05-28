import styled from "styled-components";

const Card = styled.div`
  cursor: pointer;
  margin-right: 1.5rem;
  position: relative;
`

const CardImage = styled.img`
  min-height: 15rem;
  max-height: 15rem;
  max-width: 12rem;
  object-fit: cover;
  transition: 400ms;
  min-width: 12rem;

  &:hover {
    transform: scale(1.03);
    filter: brightness(0.6);
  }

  @media screen and (min-width: 768px) {
    min-height: 20rem;
    max-height: 20rem;
    max-width: 18rem;
    min-width: 18rem;
  }
`

const Name = styled.h5`
  bottom: 0;
  font-size: 2.25rem;
  font-variant: small-caps;
  margin: 0;
  position: absolute;
`

export default {
  Card,
  CardImage,
  Name
}
