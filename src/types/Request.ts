export interface IResponse {
  total_pages: number
  total_results: number
  page: number
  results: IResponseData[]
}

export interface IResponseData {
  adult: boolean
  backdrop_path: string
  homepage: string
  genre_ids: number[]
  id: number
  runtime: number
  genres: {
    id: number
    name: string
  }[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  name: string
  first_air_date: string
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

export const defaultValues = {
  adult: false,
  backdrop_path: 'string',
  genre_ids: [0],
  id: 0,
  original_language: '',
  runtime: 0,
  homepage: '',
  original_title: '',
  overview: '',
  genres: [{
    id: 0,
    name: ''
  }],
  popularity: 0,
  poster_path: '',
  name: '',
  first_air_date: '',
  release_date: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
}
