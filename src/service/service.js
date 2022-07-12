export const API_KEY = '5e1fcd47f20766d1df18c73f06c8901a';
export const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  return await fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`).then(
    res => res.json()
  );
}

export async function fetchMoviesByKeyword(query) {
  return await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
  ).then(res => res.json());
}

export async function fetchMovieById(movieId) {
  return await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`).then(
    res => res.json()
  );
}

export async function fetchGetGenresList(array) {
  return await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(res => {
      const arrOfGenres = array.map(({ id }) => {
        return res.find(obj => obj);
      });
      console.log(arrOfGenres);
      return arrOfGenres?.map(obj => obj.name).join(' ');
    });
}

export async function fetchCast(movieId) {
  return await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  ).then(res => res.json());
}

export async function fetchReviews(movieId) {
  return await fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  ).then(res => res.json());
}
