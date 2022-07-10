import { Routes, Route, NavLink } from 'react-router-dom';

import Header from '../Header';
import Home from 'Views/Home';
import Movies from 'Views/Movies';
import s from './App.module.css';
import Navigation from 'components/Navigation';

export default function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
    </>
  );
}
