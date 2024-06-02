import { Genre } from "@/types"
import { MovieListByGenre } from "./movie/MovieListByGenre"

type GenresSectionProps = {
  genres: Genre[]
}

export const GenresSection = ({ genres }: GenresSectionProps) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {genres.map((genre) => {
        return (
          <MovieListByGenre
            key={genre.id}
            {...genre}
          />
        )
      })}
    </div>
  )
}
