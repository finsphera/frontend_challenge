import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  to {
    opacity: 1;
  }
`

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  overflow: hidden;
  opacity: 0;
  animation: ${FadeIn} 0.5s forwards;
`

export default {
  Wrapper
}
