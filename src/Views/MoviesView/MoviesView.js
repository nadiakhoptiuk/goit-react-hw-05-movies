import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesByKeyword } from 'service/service';
import Section from '../../components/Section';
import SearchForm from '../../components/SearchForm';
import MovieList from 'components/MovieList';

export default function MoviesView() {
  const [movielist, setMovielist] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  //

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) {
      return;
    }

    fetchMoviesByKeyword(query).then(res => setMovielist(res.results));
  }, [searchParams]);

  return (
    <Section>
      <SearchForm setSearchParams={setSearchParams} />
      <MovieList moviesArray={movielist} />
    </Section>
  );
}
