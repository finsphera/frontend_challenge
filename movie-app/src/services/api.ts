import axios from 'axios';

// API key, base URL, and default language for API requests
const API_KEY = '3fd4f4303c11b0d8d275b9e7f47f32c7';
const BASE_URL = 'https://api.themoviedb.org/3';
const LANGUAGE = 'en-US';

// Interface for fetch parameters
interface FetchParams {
  [key: string]: any;
}

// Function to fetch data from the API
const fetchAPI = async (endpoint: string, params: FetchParams = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

// Function to fetch popular movies
export const getPopularMovies = async (page: number) => {
  const endpoint = '/movie/popular';
  const params = { page };
  const data = await fetchAPI(endpoint, params);
  return data ? data.results.slice(0, 17) : [];
};

// Function to fetch details of a specific movie
export const getMovieDetails = async (id: string) => {
  const endpoint = `/movie/${id}`;
  const data = await fetchAPI(endpoint);
  return data;
};

// Function to fetch videos related to a specific movie
export const getMovieVideos = async (id: string) => {
  const endpoint = `/movie/${id}/videos`;
  const data = await fetchAPI(endpoint);
  return data ? data.results : [];
};

// Function to search for movies by a query string
export const getMoviesByQuery = async (query: string) => {
  const endpoint = `/search/movie`;
  const params = { query };
  const data = await fetchAPI(endpoint, params);
  return data ? data.results : [];
};
