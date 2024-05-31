export type Genre = {
  id: number,
  name: string
}

export type Movie = {
  id: number,
  title: string,
  overview: string,
  poster_path: string,
  poster_url: string,
  release_date: string,
  vote_average: number,
  backdrop_path: string,
  backdrop_url: string
}

export type ResponseDiscoverMovie = {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}
