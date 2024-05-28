import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface IMenuItem {
  icon: React.ReactNode
  path: string
}

const MenuItem = ({ icon, path }: IMenuItem) => {
  const router = useRouter()
  return (
    <Link
    style={{
      color: router.pathname === path ? '#40c1ad': '#fff',
      fontSize: '2rem',
      margin: '2.5rem 0'
    }}
      href={path}
    >
      {icon}
    </Link>
  )
}

export default MenuItem
