'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Hero, HeroProps } from './Hero'

type HeroCarouselProps = {
  items: HeroProps[]
}

export const HeroCarousel = ({ items }:  HeroCarouselProps) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 8000
        })
      ]}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem
            className="p-0"
            key={item.title}
          >
            <Hero {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
