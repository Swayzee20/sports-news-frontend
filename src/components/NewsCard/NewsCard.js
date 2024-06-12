import React from "react";
import "./NewsCard.css";

import cardImagePath from "../../Images/soccerField.png";

function NewsCard() {
  return (
    <div className="newscard">
      <img className="newscard__image" src={cardImagePath} />
      <div className="newscard__info">
        <div className="newscard__date">June 1, 2024</div>
        <h2 className="newscard__title">Team goes to SemiFinal</h2>
        <p className="newscard__body">
          To whom it may concern, the basketball team made it to the finals.
          they fought hard and the Dallas Mavericks routed the timberwolves 4-1
          in the series. The Mavericks will
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
