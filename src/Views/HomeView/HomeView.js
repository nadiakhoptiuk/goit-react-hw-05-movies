import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'service/service';
import Section from 'components/Section';
import MovieList from 'components/MovieList';

export default function HomeView() {
  const [movielist, setMovielist] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => setMovielist(res.results));
  }, []);

  return (
    <Section title="Trending today">
      <MovieList moviesArray={movielist} />
    </Section>
  );
}
