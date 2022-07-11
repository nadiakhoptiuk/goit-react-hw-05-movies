export const API_KEY = '5e1fcd47f20766d1df18c73f06c8901a';
export const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  return fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`).then(res =>
    res.json()
  );
}

export async function fetchMoviesByKeyword(query) {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
  ).then(res => res.json());
}

export async function fetchMovieById(movieId) {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`).then(res =>
    res.json()
  );
}
