import React from "react";
import "./PlayerCard.css";
import { getPlayerData } from "../../Utils/api";

function PlayerCard({ topPlayer, player, yards }) {
  console.log(yards);
  // const [playerInfo, setPlayerInfo] = React.useState({});
  // let newPlayer = player;
  // React.useEffect(() => {
  //   getPlayerData(player.playerID).then((data) => {
  //     newPlayer.name = data.body.espnName;
  //     newPlayer.image = data.body.espnHeadshot;
  //     console.log(newPlayer);
  //   });
  // }, []);
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
          <div className="playercard__position">{player.pos}</div>
          <div className="playercard__jersey">#{player.jerseyNum}</div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
