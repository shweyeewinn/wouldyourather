import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul className="main-navigation">
          <li>
            <NavLink to="/" exact activeClassName="active">
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add">
              <p>New Question</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">
              <p>Leader Board</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
