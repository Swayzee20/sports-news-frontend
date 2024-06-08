import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__elements">
        <h1 className="header__title"> Sports News</h1>
        <div className="header__nav">
          <Link to="/" className="header__button header__button-home">
            Home
          </Link>
          <Link to="/profile" className="header__button header__button-profile">
            Profile
          </Link>
          <button className="header__button header__button-signup" type="click">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
