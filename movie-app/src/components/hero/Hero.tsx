import Link from 'next/link'

export type HeroProps = {
  image: string
  title: string
  href: string
  description: string
  children?: React.ReactNode
}

export const Hero = ({ image, title, href, children, description }: HeroProps) => {
  return (
    <div className="h-[400px] m:h-[450px] lg:h-[500px] overflow-hidden relative flex justify-center">
      <div style={{ backgroundImage: `url(${image})` }} className="w-full h-full bg-center bg-cover duration-500"></div>
      <div className="w-full h-[400px] m:h-[450px] lg:h-[500px] bg-gradient-to-t from-primary from-90% to-primary-foreground opacity-25 absolute top-0"></div>
      <div className="text-amber-50 pt-[70px] lg:pt-[125px] container absolute">
        {
          children ?? (
            <div>
              <p className="text-4xl sm:text-5xl lg:text-7xl font-black max-w-3xl leading-loose mb-5">{ title }</p>
              <p className="text-xl max-w-4xl lg:mb-8 mb-8 line-clamp-4">{ description }</p>
              <Link
                href={href}
                className="bg-primary px-4 py-2 rounded-lg hover:scale-105 transition-transform font-bold"
              >
                More details
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}
