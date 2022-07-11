import { Link } from 'react-router-dom';

export default function MovieItem({ id, title, name, state }) {
  return (
    <>
      <Link to={`${id}`} state={state}>
        {title || name}
      </Link>
    </>
  );
}
