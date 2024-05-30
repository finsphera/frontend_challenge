import React from 'react'
import S from './container.styles'

const Container = ({children}: any) => {
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  )
}

export default Container
