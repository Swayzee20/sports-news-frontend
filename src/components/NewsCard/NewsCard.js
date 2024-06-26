import React from "react";
import "./NewsCard.css";

import cardImagePath from "../../Images/soccerField.png";

function NewsCard({ story }) {
  return (
    <div className="newscard">
      <img src={story.image} className="newscard__image" />

      <div className="newscard__info">
        <a className="newscard__link" href={story.link}>
          Link to Full Story:{" "}
        </a>
        <div className="newscard__title">{story.title}</div>
        <p className="newscard__body"></p>
      </div>
    </div>
  );
}

export default NewsCard;
