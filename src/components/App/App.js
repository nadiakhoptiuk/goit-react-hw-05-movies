import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import constants from 'constants';
import Header from '../Header';
import HomeView from '../../Views/HomeView';
import MoviesView from 'Views/MoviesView';
import NotFoundView from 'Views/NotFoundView';
// import s from './App.module.css';
import Navigation from 'components/Navigation';
import MovieInfo from 'components/MovieItem';

export default function App() {
  const { home, movies, notFound } = constants;
  const [query, setQuery] = useState('');
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main>
        <Routes>
          <Route
            exact
            path={home}
            element={<HomeView query={query} setQuery={setQuery} />}
          />

          <Route
            path={movies}
            element={<MoviesView query={query} setQuery={setQuery} />}
          >
            {/* <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} /> */}
            {/* <Route path={location.pathname} element={<MovieInfo />} /> */}
          </Route>

          <Route path={movies} />

          <Route path={notFound} element={<NotFoundView />} />
        </Routes>
      </main>
    </>
  );
}
