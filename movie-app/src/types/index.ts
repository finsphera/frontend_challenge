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
  production_companies?: ProductionCompany[]
}

export type ResponseDiscoverMovie = {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}

export type ProductionCompany = {
  id: number,
  logo_path: string,
  logo_url: string,
  name: string,
  origin_country: string
}

export type Cast = {
  id: number,
  name: string,
  profile_path: string,
  profile_url: string,
  character: string
}
