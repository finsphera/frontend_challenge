import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const StyledLink = styled(Link)<{
  path: string
}>`
  color: ${(props) => useRouter().pathname ===  props.path ? '#40c1ad' : '#fff'};
  font-size: 1rem;
  margin: 2.75rem 0;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`

interface IMenuItem {
  icon: React.ReactNode
  path: string
}

const MenuItem = ({ icon, path }: IMenuItem) => {
  return (
    <StyledLink
      path={path}
      href={path}
    >
      {icon}
    </StyledLink>
  )
}

export default MenuItem
