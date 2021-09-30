import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact style={s.link} activeStyle={s.activeLink}>
        Home
      </NavLink>

      <NavLink to="/contacts" style={s.link} activeStyle={s.activeLink}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;