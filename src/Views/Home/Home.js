import Section from 'components/Section';
import MovieList from 'components/MovieList';

export default function Home() {
  return (
    <Section title="Trending today">
      <MovieList />
    </Section>
  );
}
