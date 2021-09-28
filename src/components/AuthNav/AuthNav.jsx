import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';


 const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/users/signup"
        exact
        style={s.link}
        activeStyle={s.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/users/login"
         exact
        style={s.link}
        activeStyle={s.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
}

export default AuthNav;