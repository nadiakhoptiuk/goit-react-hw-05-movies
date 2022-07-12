import { useLocation } from 'react-router-dom';
import s from './MovieList.module.css';
import MovieItem from 'components/MovieItem';

export default function MovieList({ moviesArray }) {
  const location = useLocation();

  const { pathname } = location;

  return (
    <ul className={s.movieList}>
      {moviesArray?.map(movieItem => {
        return (
          <li key={movieItem.id} className={s.movieItem}>
            <MovieItem
              id={movieItem.id}
              title={movieItem.title}
              name={movieItem.name}
              state={movieItem}
              parentPath={pathname}
            />
          </li>
        );
      })}
    </ul>
  );
}
