import React from "react";
import { getTeamSchedule, getTeams, getPlayerData } from "../../Utils/api";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./Profile.css";

const initialState = {
  players: [{ pos: "QB" }, { pos: "RB" }, { pos: "WR" }],
};

function playersReducer(state, action) {
  switch (action.type) {
    case "update passer":
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        players: [
          ...state.players.filter((player) => player.pos !== "QB"),
          action.payload,
        ],
      };
    case "update rusher":
      return {
        ...state,
        players: [
          ...state.players.filter((player) => player.pos !== "RB"),
          action.payload,
        ],
      };
    case "update receiver":
      return {
        ...state,
        players: [
          ...state.players.filter((player) => player.pos !== "WR"),
          action.payload,
        ],
      };
    default:
      return state;
  }
}

// function playersReducer(state, action) {
//   if (action.type === "update passer" && state[0] !== action.payload) {
//     return [...state, state[0].action.payload];
//   } else if (action.type === "update rusher" && state[1] !== action.payload) {
//     return [...state, state[1].action.payload];
//   } else if (action.type === "update receiver" && state[2] !== action.payload) {
//     return [...state, state[2].action.payload];
//   }
// }

function Profile() {
  const [schedule, setSchedule] = React.useState([]);
  const [date, setDate] = React.useState([]);
  const [myTeam, setMyTeam] = React.useState([]);
  const [topPlayers, dispatch] = React.useReducer(playersReducer, initialState);
  const [passer, setPasser] = React.useState({});
  const [rusher, setRusher] = React.useState({});
  const [receiver, setReceiver] = React.useState({});
  const [topPlayer, setTopPlayer] = React.useState([]);

  // React.useEffect(() => {
  //   getTeamSchedule()
  //     .then((data) => {
  //       setSchedule(data.body.schedule);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  //take the other api calls out of this use effect, maybe assign the variables that you need, to another variable outside of the useeffect,
  //so that you can use the data in the other API calls.

  // React.useEffect(() => {
  //   getTeams()
  //     .then((data) => {
  //       setMyTeam(data);
  //       return data;
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setTopPlayer([
  //         data[0].topPerformers.Passing.passYds,
  //         data[0].topPerformers.Rushing.rushYds,
  //         data[0].topPerformers.Receiving.recYds,
  //       ]);
  //       getPlayerData(data[0].topPerformers.Passing.passYds.playerID)
  //         .then((playerData) => {
  //           setPasser(playerData.body);
  //           dispatch({
  //             type: "update passer",
  //             payload: playerData.body,
  //           });
  //         })
  //         .catch((err) => console.error(err));
  //       getPlayerData(data[0].topPerformers.Rushing.rushYds.playerID)
  //         .then((playerData) => {
  //           console.log(playerData.body);
  //           setRusher(playerData.body);
  //           dispatch({
  //             type: "update rusher",
  //             payload: playerData.body,
  //           });
  //         })
  //         .catch((err) => console.error(err));
  //       getPlayerData(data[0].topPerformers.Receiving.recYds.playerID)
  //         .then((playerData) => {
  //           setReceiver(playerData.body);
  //           dispatch({
  //             type: "update receiver",
  //             payload: playerData.body,
  //           });
  //         })
  //         .catch((err) => console.error(err));
  //       dispatch({
  //         type: "update passYds",
  //         payload: "5000",
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

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
        <div className="profile__players">
          <h2>Top Performers</h2>
          <div className="profile__players_cards">
            {topPlayers.players.map((player) => {
              return (
                <PlayerCard
                  key={topPlayers.players.indexOf(player)}
                  yards={topPlayer.find(
                    (element, index) =>
                      index === topPlayers.players.indexOf(player)
                  )}
                  topPlayer={topPlayer}
                  player={player}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
