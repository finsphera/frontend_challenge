'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type SidebarLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string
  title: string
  icon: React.ReactNode
}

export const SidebarLink = ({ href, title, icon, className }: SidebarLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={
        cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary',
          isActive ? 'bg-muted  text-primary' : 'text-muted-foreground',
          className
        )
      }
    >
      {icon}
      {title}
    </Link>
  )
}
