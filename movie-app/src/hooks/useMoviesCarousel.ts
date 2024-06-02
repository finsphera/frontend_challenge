import { useState, useEffect } from 'react'
import { type CarouselApi } from '@/components/ui/carousel'

type useMoviesCarouselProps  = {
  onLoad: () => void
}

export const useMoviesCarousel = ({ onLoad }: useMoviesCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState<number>(0)
  const [count, setCount] = useState<number>(0)
 
  useEffect(() => {
    if (!api) {
      return
    }

 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
      if (!api.canScrollNext()) {
        onLoad()
      }
    })
  }, [api, onLoad])

  return { setApi }
}
 
