import { Link } from 'react-router-dom';

export default function MovieItem({ id, title, name, state, location }) {
  return (
    <>
      <Link
        to={`/movies/${id}`}
        state={{ movie: state, locationObj: location }}
      >
        {title || name}
      </Link>
    </>
  );
}
