import Image from "next/image";
import { HeroCarousel } from "@/components/hero/HeroCarousel"
import { GenresSection } from "@/components/GenresSection"
import { getPopularMovies, getGenres } from "@/services/IMDBService"

export default async function Home() {
  const [movies, genres] = await Promise.all([getPopularMovies(), getGenres()]) 

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
      <GenresSection genres={genres} />
    </div>
  );
}
