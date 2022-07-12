import { lazy, Suspense } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';

import constants from 'constants';
import s from './App.module.css';

const Header = lazy(() => import('../Header' /* webpackChunkName: "header" */));
const HomeView = lazy(() =>
  import('Views/HomeView' /* webpackChunkName: "home-view" */)
);
const MoviesView = lazy(() =>
  import('Views/MoviesView' /* webpackChunkName: "movie-view" */)
);
const NotFoundView = lazy(() =>
  import('Views/NotFoundView' /* webpackChunkName: "not-found" */)
);
const Navigation = lazy(() =>
  import('components/Navigation' /* webpackChunkName: "nav" */)
);
const MovieInfoView = lazy(() =>
  import('Views/MovieInfoView' /* webpackChunkName: "movie-info-view" */)
);
const Casts = lazy(() =>
  import('components/Casts/Casts' /* webpackChunkName: "casts" */)
);
const Reviews = lazy(() =>
  import('components/Reviews' /* webpackChunkName: "reviews" */)
);

export default function App() {
  const { home, movies, notFound, id, casts, reviews } = constants;

  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main>
        <Suspense
          fallback={
            <div className={s.loader}>
              <MutatingDots />
            </div>
          }
        >
          <Routes>
            <Route exact path={home} element={<HomeView />} />

            <Route path={movies} element={<MoviesView />} />

            <Route path={`movies/${id}`} element={<MovieInfoView />}>
              <Route path={casts} element={<Casts />} />
              <Route path={reviews} element={<Reviews />} />
            </Route>

            <Route path={notFound} element={<NotFoundView />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}
