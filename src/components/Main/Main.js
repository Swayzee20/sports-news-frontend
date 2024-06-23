import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import Dropdown from "../Dropdown/Dropdown";
import "./Main.css";
import { getNewsStories } from "../../Utils/api";

function Main({ loggedIn, onClick }) {
  const { handleSignUpModal, handleTeamModal } = onClick;
  const [newsStories, setNewsStories] = React.useState([]);

  // React.useEffect(() => {
  //   getNewsStories()
  //     .then((data) => {
  //       setNewsStories(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  console.log(newsStories);

  return (
    <main className="main">
      <div className="main__title">
        See what's going on in the world of Football
      </div>
      <div className="main__search">
        {loggedIn ? (
          <h3 className="main__search_title">Choose your team to follow</h3>
        ) : (
          <h3 className="main__search_title">
            Keep up with your favorite team
          </h3>
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
      <div className="main__newssection">
        <h2 className="main__newssection_title">Recent News</h2>
        <div className="main__newscards">
          {newsStories.map((story) => {
            return (
              <NewsCard
                key={newsStories.indexOf(story)}
                story={story}
                alt="news story photo"
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Main;
