import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  overflow: hidden;
`

const Container = ({children}: any) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Container
