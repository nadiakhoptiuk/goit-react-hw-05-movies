import { Link } from 'react-router-dom';

export default function MovieItem({ id, title, name, state, parentPath }) {
  return (
    <>
      <Link to={`/movies/${id}`} state={{ movie: state, from: parentPath }}>
        {title || name}
      </Link>
    </>
  );
}
