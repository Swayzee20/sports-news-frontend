import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__elements">
        <h1 className="header__title"> Sports News</h1>
        <div className="header__nav">
          <button className="header__home-button" type="click">
            Home
          </button>
          <button className="header__profile-button" type="click">
            Profile
          </button>
          <button className="header__signup" type="click">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
