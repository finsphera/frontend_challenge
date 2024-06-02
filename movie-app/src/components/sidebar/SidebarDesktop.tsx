import Link from 'next/link'
import Image from 'next/image'
import { Home, Star } from 'lucide-react'
import { SidebarLink } from './SidebarLink'

export const SidebarDesktop = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              className="h-10 w-10"
              src="/logo.svg"
              alt="Movie App Logo"
              width="24"
              height="24"
            />
            <span className="sr-only">Movie App</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <SidebarLink href="/" title="Home" icon={<Home className="h-4 w-4" />} />
            <SidebarLink href="/favorites" title="Favorites" icon={<Star className="h-4 w-4" />} />
          </nav>
        </div>
      </div>
    </div>
  )
}
