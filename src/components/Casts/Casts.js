import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchCast } from 'service/service';
import Cast from 'components/Cast/Cast';
// import s from './Casts.module.css';

export default function Casts() {
  const [casts, setCasts] = useState([]);
  const location = useLocation();

  const {
    state: { id },
  } = location;

  useEffect(() => {
    fetchCast(id).then(res => setCasts(res.cast));
  }, [id]);

  return (
    <ul>
      {casts
        ? casts.map(({ name, character, profile_path, id: actorId }) => {
            return (
              <li key={actorId}>
                <Cast name={name} character={character} src={profile_path} />
              </li>
            );
          })
        : null}
    </ul>
  );
}
