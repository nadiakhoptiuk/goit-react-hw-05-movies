import { useEffect, useState } from 'react';
import { fetchMoviesByKeyword } from 'service/service';
import Section from '../../components/Section';
import SearchForm from '../../components/SearchForm';
import MovieList from 'components/MovieList';

export default function MoviesView() {
  const [query, setQuery] = useState('');
  const [movielist, setMovielist] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMoviesByKeyword(query).then(res => setMovielist(res.results));
  }, [query]);

  return (
    <Section>
      <SearchForm setQuery={setQuery} />
      <MovieList moviesArray={movielist} />
    </Section>
  );
}
