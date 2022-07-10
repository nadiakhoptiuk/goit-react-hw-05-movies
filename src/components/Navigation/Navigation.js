import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <li className={s.navItem}>
        <NavLink
          exact="true"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className={s.navItem}>
        <NavLink
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
    </nav>
  );
}
