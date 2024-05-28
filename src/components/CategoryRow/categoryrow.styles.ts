import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
`

const CategoryTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.25vw;
`

const CategoryLink = styled.a`
  color: #838383;
  cursor: pointer;
  display: none;
  font-size: 1.125rem;
  line-height: 1.25vw;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const CategoryMovies = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
`

const CategoryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default {
  Container,
  CategoryTitle,
  CategoryMovies,
  CategoryInfo,
  CategoryLink,
}
