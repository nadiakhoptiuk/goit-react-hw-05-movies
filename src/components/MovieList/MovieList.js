// import Section from 'components/Section';

import { useEffect, useState } from 'react';
import s from './MovieList.module.css';
import MovieItem from 'components/MovieItem';

const API_KEY = '5e1fcd47f20766d1df18c73f06c8901a';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default function MovieList({ query }) {
  const [movielist, setMovielist] = useState([]);

  function fetchTrendingMovies(query) {
    fetch(`${BASE_URL}'trending/all/day'?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(res => setMovielist(res.results));
  }

  function fetchMoviesByKeyword(query) {
    fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
    )
      .then(res => res.json())
      .then(res => setMovielist(res.results));
  }

  function fetchMovieById(movieId) {
    fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(res => setMovielist(res.results));
  }

  useEffect(() => {
    fetchMoviesByKeyword(query);
  }, [query]);

  return (
    <ul className={s.movieList}>
      {movielist?.map(movieItem => {
        return (
          <li key={movieItem.id} className={s.movieItem}>
            <MovieItem
              id={movieItem.id}
              title={movieItem.title}
              name={movieItem.name}
            />
          </li>
        );
      })}
    </ul>
  );
}
