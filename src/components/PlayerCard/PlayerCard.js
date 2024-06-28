import React from "react";
import "./PlayerCard.css";
import { getPlayerData } from "../../Utils/api";

function PlayerCard({ topPlayer, player, yards }) {
  return (
    <div className="playercard">
      <img
        className="playercard__image"
        src={player.espnHeadshot}
        alt="player image"
      />
      <div className="playercard__info">
        <h3 className="playercard__title">{player.espnName}</h3>
        <div className="playercard__stat">
          <h4 className="playercard__position">{player.pos}</h4>
          <h4 className="playercard__jersey">#{player.jerseyNum}</h4>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
