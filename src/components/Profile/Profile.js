import React from "react";
import {
  getTeamSchedule,
  getTeams,
  getPlayerData,
  getNewsStories,
} from "../../Utils/api";
import NewsCard from "../NewsCard/NewsCard";
import PlayerCard from "../PlayerCard/PlayerCard";
import Preloader from "../Preloader/Preloader";
import { teams } from "../../Utils/Constants";
import "./Profile.css";

const initialState = {
  players: [{ pos: "QB" }, { pos: "RB" }, { pos: "WR" }],
};

function playersReducer(state, action) {
  switch (action.type) {
    case "update passer":
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
          ...state.players.filter(
            (player) => player.espnID !== state.players[0].espnID
          ),
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

function Profile({ abv }) {
  const [schedule, setSchedule] = React.useState([]);
  const [date, setDate] = React.useState([]);
  const [topPlayers, dispatch] = React.useReducer(playersReducer, initialState);
  const [passer, setPasser] = React.useState({});
  const [rusher, setRusher] = React.useState({});
  const [receiver, setReceiver] = React.useState({});
  const [topPlayer, setTopPlayer] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [newsStories, setNewsStories] = React.useState([]);

  const teamName = teams.filter((item) => item.value === abv);

  function handlePreloader(status) {
    setIsLoading(status);
  }

  React.useEffect(() => {
    getNewsStories()
      .then((data) => {
        setNewsStories(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  React.useEffect(() => {
    if (abv === "") {
      return;
    } else {
      setIsLoading(true);
      getTeamSchedule(abv)
        .then((data) => {
          setSchedule(data.body.schedule);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  //take the other api calls out of this use effect, maybe assign the variables that you need, to another variable outside of the useeffect,
  //so that you can use the data in the other API calls.

  React.useEffect(() => {
    if (abv === "") {
      return;
    } else {
      getTeams()
        .then((data) => {
          return data.body.filter((item) => item.teamAbv === abv);
        })
        .then((data) => {
          setTopPlayer([
            data[0].topPerformers.Passing.passYds,
            data[0].topPerformers.Rushing.rushYds,
            data[0].topPerformers.Receiving.recYds,
          ]);
          getPlayerData(data[0].topPerformers.Passing.passYds.playerID)
            .then((playerData) => {
              setPasser(playerData.body);
              dispatch({
                type: "update passer",
                payload: playerData.body,
              });
            })
            .catch((err) => console.error(err));
          getPlayerData(data[0].topPerformers.Rushing.rushYds.playerID)
            .then((playerData) => {
              setRusher(playerData.body);
              dispatch({
                type: "update rusher",
                payload: playerData.body,
              });
            })
            .catch((err) => console.error(err));
          getPlayerData(data[0].topPerformers.Receiving.recYds.playerID)
            .then((playerData) => {
              setReceiver(playerData.body);
              dispatch({
                type: "update receiver",
                payload: playerData.body,
              });
            })
            .catch((err) => console.error(err));
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  console.log(topPlayers.players);

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
        {abv === "" ? (
          <div className="profile__subtitle">Select A Team to Follow</div>
        ) : (
          <div className="profile__schedule_info">
            <div className="profile__teamname">{teamName[0].label}</div>
            <div className="profile__teamschedule">
              {schedule.map((game) => {
                return game.seasonType === "Regular Season" ? (
                  <div
                    key={schedule.indexOf(game)}
                    className="profile__teamschedule_game"
                  >
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
          {abv === "" ? (
            <div />
          ) : (
            <div className="profile__players_cards">
              <h2 className="profile__players_title">Top Performers</h2>
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
                <NewsCard
                  key={newsStories.indexOf(story)}
                  story={story}
                  alt="news story photo"
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
