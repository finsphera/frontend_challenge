import Image from "next/image";
import { HeroCarousel } from "@/components/hero/HeroCarousel"
import { getPopularMovies } from "@/services/IMDBService"

export default async function Home() {
  const movies = await getPopularMovies()

  return (
    <div>
      <HeroCarousel
        items={movies.map((movie) => {
          return {
            title: movie.title,
            image: movie.poster_url,
            href: `/movie/${movie.id}`,
            description: movie.overview,
          }
        })}
      />
    </div>
  );
}
