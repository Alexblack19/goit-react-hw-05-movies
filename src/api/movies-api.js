import axios from 'axios';

const API_KEY = '8d8d3dc5b057b4e897666b62d764d19c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getMovies(endpoint, query = '') {
  const response = await axios.get(endpoint);
  return response.data;
}

export function getTrendingMovies() {
  return getMovies(`/trending/movie/day?api_key=${API_KEY}`);
}

// export function getSearchMovies(query) {
//   return getMovies(`/search/movie?api_key=${API_KEY}&query=${query}`);
// }

export function getMovieDetails(movieId) {
  return getMovies(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}

export function getMovieCredits(movieId) {
  return getMovies(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function getMovieReviews(movieId) {
  return getMovies(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
}