import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";

function Header({ loggedIn, onClick }) {
  return (
    <div className="header">
      <div className="header__elements">
        <h1 className="header__title"> Sports News</h1>
        <nav className="header__nav">
          <NavLink
            exact
            to="/"
            activeClassName="header__button-home_active"
            className="header__button header__button-home"
          >
            Home
          </NavLink>
          {loggedIn ? (
            <NavLink
              to="/profile"
              activeClassName="header__button-profile_active"
              className="header__button header__button-profile"
            >
              Profile
            </NavLink>
          ) : (
            <button
              className="header__button header__button-signup"
              type="click"
              onClick={onClick}
            >
              Sign up
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
