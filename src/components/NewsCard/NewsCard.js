import React from "react";
import "./NewsCard.css";

import cardImagePath from "../../Images/soccerField.png";

function NewsCard({ story }) {
  return (
    <div className="newscard">
      <img src={story.image} className="newscard__image" />

      <div className="newscard__info">
        <div className="newscard__date">Link: {story.link}</div>
        <div className="newscard__title">{story.title}</div>
        <p className="newscard__body"></p>
      </div>
    </div>
  );
}

export default NewsCard;
