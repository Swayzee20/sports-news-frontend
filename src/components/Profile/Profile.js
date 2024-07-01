import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import PlayerCard from "../PlayerCard/PlayerCard";

import Preloader from "../Preloader/Preloader";
import { TEAMS } from "../../Utils/Constants";
import "./Profile.css";

function Profile({
  isLoading,
  schedule,
  myTeam,
  newsStories,
  topPlayers,
  topPlayer,
}) {
  const teamName = TEAMS.filter((item) => item.value === myTeam);

  // Variables and Functions for extracting game info from api data
  let gameDate = [];

  function handleGameDate(info) {
    const splitInfo = info.split("");
    const monthArr = splitInfo.slice(4, 6);
    const dayArr = splitInfo.slice(6, 8);
    gameDate = [monthArr.join(""), dayArr.join("")];
    return gameDate.join("/");
  }

  function handleGameTeams(info) {
    const splitInfo = info.split("");
    let teams = splitInfo.slice(9, splitInfo.length);
    let newTeams = teams.join("");
    teams = newTeams.split("@").join(" @ ");
    return teams;
  }

  return isLoading ? (
    <Preloader />
  ) : (
    <main className="profile">
      <div className="profile__content">
        <h2 className="profile__title">My Team</h2>
        {/* <div className="profile__teamschedule"> */}
        {myTeam === "" ? (
          <div className="profile__subtitle">Select A Team to Follow</div>
        ) : (
          <div className="profile__schedule">
            <h3 className="profile__teamname">{teamName[0].label}</h3>
            <div className="profile__teamschedule">
              {schedule.map((game) => {
                return game.seasonType === "Regular Season" ? (
                  <div key={schedule.indexOf(game)} className="profile__game">
                    <p>Wk: {schedule.indexOf(game) - 2}</p>
                    <div>
                      {handleGameDate(game.gameID)}{" "}
                      {handleGameTeams(game.gameID)}
                    </div>
                  </div>
                ) : (
                  console.log("")
                );
              })}
            </div>
          </div>
        )}
        {/* </div> */}
        <div className="profile__players">
          {myTeam === "" ? (
            <div />
          ) : (
            <div className="profile__playercard">
              <h2 className="profile__performers">Top Performers</h2>
              {topPlayers.players.map((player) => {
                return (
                  <PlayerCard
                    key={topPlayers.players.indexOf(player)}
                    // yards={topPlayer.find(
                    //   (element, index) =>
                    //     index === topPlayers.players.indexOf(player)
                    // )}
                    topPlayer={topPlayer}
                    player={player}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="profile__newssection">
          <h2 className="profile__newssection_title">Recent NFL News</h2>
          <div className="profile__newscards">
            {newsStories.map((story) => {
              return (
                <NewsCard key={newsStories.indexOf(story)} story={story} />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
