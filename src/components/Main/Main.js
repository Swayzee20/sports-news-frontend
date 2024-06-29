import React from "react";
import aboutPhoto from "../../Images/dsc04111.JPG";
import "./Main.css";
import { getNewsStories } from "../../Utils/api";

function Main({ loggedIn, onClick }) {
  const { handleSignUpModal, handleTeamModal } = onClick;
  const [newsStories, setNewsStories] = React.useState([]);

  React.useEffect(() => {
    getNewsStories()
      .then((data) => {
        setNewsStories(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="main">
      <h2 className="main__title">
        See what's going on in the world of Football
      </h2>
      <div className="main__search">
        {loggedIn ? (
          <h3 className="main__subtitle">Choose your team to follow</h3>
        ) : (
          <h3 className="main__subtitle">Keep up with your favorite team</h3>
        )}
        {loggedIn ? (
          <button
            className="main__button"
            type="click"
            onClick={handleTeamModal}
          >
            Select Team
          </button>
        ) : (
          <button
            className="main__button"
            type="click"
            onClick={handleSignUpModal}
          >
            Sign Up
          </button>
        )}
      </div>
      <div className="main__about">
        <div className="main__content">
          <h2 className="main__author">About the Author</h2>
          <div className="main__info">
            <img className="main__image" src={aboutPhoto} alt="author"></img>
            <p className="main__summary">
              Hi, my name is Josue Flores and I'm a full stack developer. Some
              of the technologies I know, and have implemented into this Web
              App, include HTML, CSS, Javascript, and React. I built the backend
              using Node.js, MongoDB, and Express. I've learned and implemented
              things such as adaptive web design, and building reusable
              components while writing scalable code. I have experience using
              GitHub and Git version control system. I have taken courses
              through TripleTen Coding Bootcamp. I've learned so much thorughout
              the course, I'm sure I've missed adding some of those things here.
              This was built from the ground up, by me, to showcase some of the
              skills I've learned at TripleTen.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
