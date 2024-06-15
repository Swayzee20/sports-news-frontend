import React from "react";
import "./NewsCard.css";

import cardImagePath from "../../Images/soccerField.png";

function NewsCard({ story }) {
  console.log(story);
  return (
    <div className="newscard">
      <img src={story.image} className="newscard__image" />
      <div className="newscard__info">
        <div className="newscard__date">June 1, 2024</div>
        <h2 className="newscard__title">{story.title}</h2>
        <p className="newscard__body"></p>
      </div>
    </div>
  );
}

export default NewsCard;
