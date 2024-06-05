import React from "react";
import "./Profile.css";
import NewsCard from "../NewsCard/NewsCard";

function Profile() {
  return (
    <main className="profile">
      <div>
        <h2>My Team</h2>
        <div className="profile__news-section">
          <NewsCard />
        </div>
      </div>
    </main>
  );
}

export default Profile;
