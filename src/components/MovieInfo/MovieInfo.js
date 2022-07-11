import { useEffect, useState } from 'react';
import { fetchMovieById } from '../../service/service';

export default function MovieInfo({ movieId }) {
  const [id, setId] = useState(movieId);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(id).then(res => setMovie(res));
  }, []);

  return (
    <article>
      <img src={movie?.poster_path} alt={movie?.title || movie?.name} />
      <p>{movie?.original_title}</p>
    </article>
  );
}
