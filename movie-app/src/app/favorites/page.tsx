import { FavoritesList } from '@/components/FavoritesList'
export default function Page() {
  return (
    <div className='pt-[60px]'>
      <h1 className='text-4xl sm:text-5xl lg:text-7xl font-black leading-loose mb-5 container text-primary'>Favorites</h1>
      <FavoritesList />
    </div>
  )
}
