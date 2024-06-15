import React from "react";
import "./Profile.css";
import NewsCard from "../NewsCard/NewsCard";
import { getNewsStories } from "../../Utils/api";

function Profile() {
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
    <main className="profile">
      <div className="profile__content">
        <h2 className="profile__title">My Team</h2>
        <div className="profile__news-section">
          {newsStories.map((story) => {
            console.log(story.image);
            return (
              <NewsCard
                //needs key//
                story={story}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Profile;
