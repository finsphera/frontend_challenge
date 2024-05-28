import styled from "styled-components";
import { BASEURL } from "../../utils/constants";

const Header = styled.header<{
  backdroppath?: string
}>`
  background-size: cover;
  background-image: ${(props) =>
    props.backdroppath
      ? `linear-gradient(to right, black, black 25%, transparent), url(${BASEURL}${props.backdroppath})`
      : 'linear-gradient(to right, black, transparent 80%, transparent)'};
  background-position: center center;
  background-repeat: no-repeat;
  height: 60vh;
  object-fit: contain;
  position: relative;
  width: 100%;
` 

const Contents = styled.div`
  margin-left: 3rem;
  padding-top: 10rem;

  @media screen and (max-width: 768px) {
    margin-left: 0rem;
    padding: 10rem 1rem;
  }
`

const MovieTitle = styled.h2`
  color: #fff;
  font-size: 2.7rem;
  font-weight: 500;
  margin: 0;
  padding-bottom: 0.3rem;
`

const MovieStats = styled.div`
  align-items: center;
  color: #7e7e7e;
  display: flex;
  font-size: 1rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const Stat = styled.div`
  margin-right: .2rem;
`

const MovieDescription = styled.div`
  color: #ccc;
  font-size: 1.25rem;
  overflow: hidden;
  width: 50%;

  @media screen and (max-width: 768px) {
    display: -webkit-box;
    font-size: 1rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    width: 100%;
  }
`

export default {
  Header,
  Contents,
  MovieTitle,
  MovieStats,
  Stat,
  MovieDescription,
}
