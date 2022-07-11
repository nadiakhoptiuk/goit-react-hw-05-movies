import Section from '../../components/Section';
import SearchForm from '../../components/SearchForm';
import MovieList from 'components/MovieList';
// import MovieItem from 'components/MovieItem';
// import s from './MoviesView.module.css';

export default function MoviesView({ query, setQuery }) {
  return (
    <Section>
      <SearchForm setQuery={setQuery} />
      <MovieList query={query} />
      {/* <MovieItem /> */}
    </Section>
  );
}
