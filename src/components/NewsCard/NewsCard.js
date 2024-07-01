import React from "react";
import "./NewsCard.css";

function NewsCard({ story }) {
  return (
    <div className="newscard">
      <img src={story.image} className="newscard__image" alt="news story" />

      <div className="newscard__info">
        <a className="newscard__link" href={story.link}>
          Link to Full Story:{" "}
        </a>
        <p className="newscard__title">{story.title}</p>
      </div>
    </div>
  );
}

export default NewsCard;
