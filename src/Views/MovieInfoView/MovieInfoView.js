import { useLocation } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo';
import Section from 'components/Section';

export default function MovieInfoView() {
  const location = useLocation();

  const {
    state: { from },
  } = location;
  console.log(location);

  return (
    <Section>
      <MovieInfo locationObj={from} />
    </Section>
  );
}
