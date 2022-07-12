import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'service/service';
import s from './MovieInfo.module.css';
import constants from 'constants';

export default function MovieInfo({ movieId }) {
  const { casts, reviews } = constants;

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    function getGenresNames(array) {
      return array
        .map(genre => {
          return genre.name;
        })
        .join(' ');
    }

    fetchMovieById(movieId).then(res => {
      const genresTitles = getGenresNames(res.genres);
      setMovie({ ...res, genresTitles });
    });

    // fetchMovieById(movieId).then(res => {
    //   console.log(res);

    //   const genresTitles = fetchGetGenresList(res.genres);
    //   setMovie({ ...res, genresTitles });
    // });
  }, [movieId]);

  return (
    <>
      <article className={s.movieInfo}>
        <div className={s.movieInfoBox}>
          <div className={s.movieImgWrapper}>
            <img
              className={s.movieImg}
              src={`${BASE_IMG_URL}w342/${movie?.poster_path}`}
              alt={movie?.title || movie?.name}
            />
          </div>
          <div className={s.movieDesc}>
            <p className={s.movieTitle}>
              {movie?.original_title} ({movie?.release_date.slice(0, 4)})
            </p>
            <p className={s.desc}>Rating: {movie?.vote_average}</p>
            <p className={s.descTitle}>Overview</p>
            <p className={s.desc}>{movie?.overview}</p>
            <p className={s.descTitle}>Genres</p>
            <p className={s.desc}>{movie?.genresTitles}</p>
          </div>
        </div>
        <div className={s.addInfoWrapper}>
          <p className={s.descTitle}>Additional Information</p>
          <ul className={s.addList}>
            <li className={s.addListItem}>
              <Link to={`${casts}`} state={movie}>
                Casts
              </Link>
            </li>
            <li className={s.addListItem}>
              <Link to={`${reviews}`} state={movie}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </article>
      <Outlet />
    </>
  );
}