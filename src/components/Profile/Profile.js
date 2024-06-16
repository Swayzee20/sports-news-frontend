import React from "react";
import { getTeamSchedule } from "../../Utils/api";
import "./Profile.css";

function Profile() {
  const [schedule, setSchedule] = React.useState([]);
  const [date, setDate] = React.useState([]);

  React.useEffect(() => {
    getTeamSchedule()
      .then((data) => {
        setSchedule(data.body.schedule);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const gameInfo = "20230812_IND@BUF";
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

  return (
    <main className="profile">
      <div className="profile__content">
        <h2 className="profile__title">My Team</h2>
        <div className="profile__teamschedule">
          {schedule.map((game) => {
            return game.seasonType === "Regular Season" ? (
              <div
                key={schedule.indexOf(game)}
                className="profile__teamschedule_game"
              >
                <p>Wk: {schedule.indexOf(game) - 2}</p>
                <div>
                  {handleGameDate(game.gameID)} {handleGameTeams(game.gameID)}
                </div>
              </div>
            ) : (
              console.log("")
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Profile;
