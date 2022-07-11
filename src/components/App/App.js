import { Routes, Route } from 'react-router-dom';

import constants from 'constants';
import Header from '../Header';
import HomeView from 'Views/HomeView';
import MoviesView from 'Views/MoviesView';
import NotFoundView from 'Views/NotFoundView';
import Navigation from 'components/Navigation';
import MovieInfoView from 'Views/MovieInfoView';

export default function App() {
  const { home, movies, notFound, id } = constants;

  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main>
        <Routes>
          <Route exact path={home} element={<HomeView />} />
          <Route path={id} element={<MovieInfoView />} />
          <Route path={movies} element={<MoviesView />} />

          <Route path={notFound} element={<NotFoundView />} />
        </Routes>
      </main>
    </>
  );
}
