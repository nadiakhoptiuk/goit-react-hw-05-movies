import { Link } from 'react-router-dom';

export default function MovieItem({ id, title, name }) {
  return (
    <>
      <Link to={`${id}`}>{title || name}</Link>
    </>
  );
}
