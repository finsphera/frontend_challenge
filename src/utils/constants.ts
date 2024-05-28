export const BASEURL = 'https://image.tmdb.org/t/p/original'

export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjk0MzIzZTIzYzc2M2E4MjQ3ZmUyMzg2N2YwMGI2MiIsInN1YiI6IjVmNzY0N2E0MTU2Y2M3MDAzNzRhYWRlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ErHfMmfpFWqZc6-TnngSiY66oup85TJP3Df-YtCEXT8'
  }
}

export const REQUESTS = {
  popularMovieList: 'https://api.themoviedb.org/3/movie/popular',
  topRatedMovies: 'https://api.themoviedb.org/3/movie/top_rated',
  upcomingMovies: 'https://api.themoviedb.org/3/movie/upcoming',
  nowPlaingMovies: 'https://api.themoviedb.org/3/movie/now_playing',
  topRatedmovieList: 'https://api.themoviedb.org/3/movie/top_rated',
  getMovieReviews: (movie_id: number) => `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
  getMovieDetails: (movie_id: number) => `https://api.themoviedb.org/3/movie/${movie_id}`,
  popularTvSeriesList: 'https://api.themoviedb.org/3/tv/popular',
  topRatedTvSeriesList: 'https://api.themoviedb.org/3/tv/top_rated',
  airlingTVSeries: 'https://api.themoviedb.org/3/tv/airing_today',
  onAirTvSeries: 'https://api.themoviedb.org/3/tv/on_the_air',
}
