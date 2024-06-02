import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { SearchContent } from './SearchContent'

export const SearchDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='relative'>
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search movies..."
            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          />
        </div>
      </DialogTrigger>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>Search movies</DialogTitle>
        </DialogHeader>
        <SearchContent />
      </DialogContent>
    </Dialog>
  )
}
