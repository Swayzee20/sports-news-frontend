import React from "react";
import "./NewsCard.css";

import cardImagePath from "../../Images/soccerField.png";

function NewsCard() {
  return (
    <div className="newscard">
      <img className="newscard__image" src={cardImagePath} />
      <div className="newscard__info">
        <div className="newscard__date">date</div>
        <h2 className="newscard__title">Team goes to SemiFinal</h2>
        <body className="newscard__body">
          To whom it may concern, the basketball team made it to the finals.
          they fought hard and the Dallas Mavericks routed the timberwolves 4-1
          in the series. The Mavericks will now move on to the NBA Finals and
          take on the celtics in what is sure to be a very entertaining matchup.
        </body>
      </div>
    </div>
  );
}

export default NewsCard;
