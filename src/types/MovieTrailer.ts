declare module 'movie-trailer' {
  function movieTrailer(
    title: string,
    year?: string | number,
    options?: any
  ): Promise<string>;
  export = movieTrailer;
}
