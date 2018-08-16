import React from 'react';
import { NavLink } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          ClientPanel
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
        >
          <span className="navbar-toggler-icon" />
        </button>


        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>


      </div>
    </nav>
  );
};

export default AppNavbar;
