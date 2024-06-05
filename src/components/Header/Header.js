import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__elements">
        <h1 className="header__title"> Sports News</h1>
        <div className="header__nav">
          <button className="header__button header__button-home" type="click">
            Home
          </button>
          <button
            className="header__button header__button-profile"
            type="click"
          >
            Profile
          </button>
          <button className="header__button header__button-signup" type="click">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
