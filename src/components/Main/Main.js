import React from "react";
import "./Main.css";
import mainBackgroundPath from "../../Images/mainBackground.png";

function Main() {
  return (
    <div className="main">
      <div className="main__title">Keep up with the world of soccer</div>
      <div className="main__subtitle">Find your favorite team</div>
      <input
        type="text"
        name="seart"
        placeholder="Search"
        minLength="1"
        maxLength="30"
        className="main__search"
        // value={name}
        // onChange={handleNameChange}
      />
    </div>
  );
}

export default Main;
