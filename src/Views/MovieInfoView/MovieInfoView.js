// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo';
import Section from 'components/Section';

export default function MovieInfoView() {
  // const location = useLocation();
  const params = useParams();

  const { movieID } = params;

  // console.log(params);

  return <Section>{<MovieInfo movieId={movieID} />}</Section>;
}
