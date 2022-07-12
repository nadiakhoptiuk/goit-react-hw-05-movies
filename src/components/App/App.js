import { Routes, Route } from 'react-router-dom';

import constants from 'constants';
import Header from '../Header';
import HomeView from 'Views/HomeView';
import MoviesView from 'Views/MoviesView';
import NotFoundView from 'Views/NotFoundView';
import Navigation from 'components/Navigation';
import MovieInfoView from 'Views/MovieInfoView';
import Casts from 'components/Casts/Casts';
import Reviews from 'components/Reviews';

export default function App() {
  const { home, movies, notFound, id, casts, reviews } = constants;

  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main>
        <Routes>
          <Route exact path={home} element={<HomeView />} />

          <Route path={movies} element={<MoviesView />} />

          <Route path={`movies/${id}`} element={<MovieInfoView />}>
            <Route path={casts} element={<Casts />} />
            <Route path={reviews} element={<Reviews />} />
          </Route>

          <Route path={notFound} element={<NotFoundView />} />
        </Routes>
      </main>
    </>
  );
}
