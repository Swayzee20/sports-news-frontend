import React from "react";
import "./Profile.css";
import NewsCard from "../NewsCard/NewsCard";

function Profile() {
  return (
    <main className="profile">
      <div className="profile__content">
        <h2 className="profile__title">My Team</h2>
        <div className="profile__news-section">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </main>
  );
}

export default Profile;
