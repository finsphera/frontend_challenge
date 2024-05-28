import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const StyledLink = styled(Link)`
  color: red;
  font-size: 3rem;
`

interface IMenuItem {
  icon: React.ReactNode
  path: string
}

const MenuItem = ({ icon, path }: IMenuItem) => {
  const router = useRouter()
  return (
    <StyledLink
 
      href={path}
    >
      {icon}
    </StyledLink>
  )
}

export default MenuItem
