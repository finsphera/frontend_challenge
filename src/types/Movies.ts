export interface IResponse {
  total_pages: number
  total_results: number
  page: number
  results: IResponseData[]
}

export interface IResponseData {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  name?: string
  first_air_date?: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}[]

export interface IReviews {
  id: number
  total_results: number
}
