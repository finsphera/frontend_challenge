import Link from "next/link";
import styled, { keyframes } from "styled-components";

const Appareance = keyframes `
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`

const ModalOverlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.30);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
`

const ModalContainer = styled.div`
  animation: ${Appareance};
  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
  animation-duration: 0.5s;
  background-color: #000;
  box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  border: 2px solid #202123;
  color: #fff;
  display: flex;
  margin: 1rem;
`

const ModalLeft = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`

const ModalRight = styled.div`
  padding: .5rem;
  width: auto;
  @media screen and (min-width: 1024px) {
    width: min-content;
  }
`

const MovieTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  font-variant: small-caps;
`

const Gender = styled.div`
  margin: 2rem 0;
  display: flex;

  span {
    background-color: #fff;
    color: #000;
    border-radius: 16px;
    margin-right: 1rem;
    padding: .5rem 1.25rem;
  }
`

const GoToMovie = styled(Link)`
  color: #fff;
  text-decoration: none;
  gap: .75rem;
  display: flex;
  transition: .4s;
  opacity: .6;

  &:hover {
    opacity: 1;
    text-decoration: underline;
    transform: scale(1.07);
  }
`

const TopContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 0 1rem;

  @media screen and (min-width: 768px) {
    margin: 2rem 2rem 0 2rem;
  }
`

const MiddleContent = styled.div`
  margin: 1rem;
  @media screen and (min-width: 768px) {
    margin: 2rem;
  }
`

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
  }
`

const Stat = styled.p`
  margin: 0 .25rem;
`

const Image = styled.img`
  height: 100%;
  width: 300px;
  object-fit: cover;
`

const BottomContent = styled.div`
  justify-content: center;
  margin: 2rem 0;
  display: flex;
  width: auto;

  iframe {
    @media screen and (min-width: 320px) {
      width: 280px !important;
    }
    @media screen and (min-width: 768px) {
      width: 420px !important;
    }
    @media screen and (min-width: 1024px) {
      width: 650px !important;
    }
  }
`

export default {
  ModalOverlay,
  ModalContainer,
  ModalLeft,
  ModalRight,
  MovieTitle,
  Gender,
  TopContent,
  GoToMovie,
  MiddleContent,
  Stats,
  Stat,
  Image,
  BottomContent
}