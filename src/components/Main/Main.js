import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./Main.css";
import { getNewsStories } from "../../Utils/api";

function Main() {
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
      <div className="main__title">
        See what's going on in the world of Football
      </div>
      <div className="main__search">
        <h3 className="main__search_title">Keep up with your favorite team</h3>
        <input
          type="text"
          name="seart"
          placeholder="Search"
          minLength="1"
          maxLength="30"
          className="main__searchbar"
          // value={name}
          // onChange={handleNameChange}
        />
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
