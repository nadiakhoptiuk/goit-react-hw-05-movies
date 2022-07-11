import { useLocation } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo';
import Section from 'components/Section';

export default function MovieInfoView() {
  const location = useLocation();

  const {
    state: { id },
  } = location;
  console.log(location);

  return (
    <Section>
      <MovieInfo movieId={id} />
    </Section>
  );
}
