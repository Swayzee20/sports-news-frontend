import React from "react";
import "./Main.css";
import mainBackgroundPath from "../../Images/mainBackground.png";

function Main() {
  return (
    <main className="main">
      <div className="main__title">
        See what's going on in the world of Football
      </div>
      <div className="main__subtitle">Keep up with your favorite team</div>
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
    </main>
  );
}

export default Main;
