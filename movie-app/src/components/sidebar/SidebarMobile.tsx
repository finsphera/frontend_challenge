import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, Star, Search, Menu } from 'lucide-react'
import { SidebarLink } from './SidebarLink'

export const SidebarMobile = () => {
  return (
    <header className="flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6 absolute z-50 w-full">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <SidebarLink href="/" title="Home" icon={<Home className="h-4 w-4" />} />
            <SidebarLink href="/favorites" title="Favorites" icon={<Star className="h-4 w-4" />} />
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search movies..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
    </header>
  )
}