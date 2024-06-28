import { BASE_URL } from "./Constants";

function handleServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getNewsStories() {
  return fetch(`${BASE_URL}/getNFLNews?recentNews=true&maxItems=3`, {
    method: "GET",
    headers: {
      // "Content-Type": "application/json",
      "x-rapidapi-key": "e4cb791f0dmsh8985bf89d71f877p15bfa2jsnb63f735d68e6",
      "x-rapidapi-host":
        "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
    },
  })
    .then(handleServerResponse)
    .then((data) => {
      return data.body;
    });
}

function getTeamSchedule(team) {
  return fetch(`${BASE_URL}/getNFLTeamSchedule?teamAbv=${team}&season=2023`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e4cb791f0dmsh8985bf89d71f877p15bfa2jsnb63f735d68e6",
      "x-rapidapi-host":
        "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
    },
  }).then(handleServerResponse);
}

function getTeams() {
  return fetch(
    `${BASE_URL}/getNFLTeams?rosters=false&schedules=false&topPerformers=true&teamStats=false&teamStatsSeason=2023`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e4cb791f0dmsh8985bf89d71f877p15bfa2jsnb63f735d68e6",
        "x-rapidapi-host":
          "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
      },
    }
  ).then(handleServerResponse);
}

function getPlayerData(playerID) {
  return fetch(
    `${BASE_URL}/getNFLPlayerInfo?playerID=${playerID}&getStats=true'`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e4cb791f0dmsh8985bf89d71f877p15bfa2jsnb63f735d68e6",
        "x-rapidapi-host":
          "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
      },
    }
  ).then(handleServerResponse);
}

export { getNewsStories, getTeamSchedule, getTeams, getPlayerData };
