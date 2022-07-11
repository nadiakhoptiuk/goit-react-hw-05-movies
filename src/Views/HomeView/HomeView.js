import Section from 'components/Section';
import MovieList from 'components/MovieList';

export default function HomeView({ query, setQuery }) {
  return (
    <Section title="Trending today">
      <MovieList query={query} />
    </Section>
  );
}
