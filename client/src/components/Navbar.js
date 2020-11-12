import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/Auth.context';

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <nav>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <div className="nav-wrapper indigo darken-2">
        <a href="/" className="brand-logo left pl">
          Коротилка
        </a>
        <ul id="nav-mobile" className="right hide-on-small-and-down">
          <li>
            <NavLink to="/create">
              <i className="material-icons medium left">edit</i>
              Создать
            </NavLink>
          </li>
          <li>
            <NavLink to="/links">
              <i className="material-icons medium left">view_list</i>История
            </NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              <i className="material-icons medium left">launch</i> Выйти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
