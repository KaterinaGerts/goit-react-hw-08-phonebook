import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';


export const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/users/signup"
        exact
        style={s.link}
        activeStyle={s.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/users/login"
        exact
        style={s.link}
        activeStyle={s.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
}
