import { baseUrl } from "./Constants";

function handleServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getNewsStories() {
  return fetch(`${baseUrl}/getNFLNews?recentNews=true&maxItems=3`, {
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

function getTeamSchedule() {
  return fetch(`${baseUrl}/getNFLTeamSchedule?teamAbv=BUF&season=2023`, {
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
    `${baseUrl}/getNFLTeams?rosters=false&schedules=false&topPerformers=true&teamStats=false&teamStatsSeason=2023`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e4cb791f0dmsh8985bf89d71f877p15bfa2jsnb63f735d68e6",
        "x-rapidapi-host":
          "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
      },
    }
  )
    .then(handleServerResponse)
    .then((data) => {
      return data.body.filter((team) => team.teamAbv === "DAL");
    });
}

function getPlayerData(playerID) {
  return fetch(
    `${baseUrl}/getNFLPlayerInfo?playerID=${playerID}&getStats=true'`,
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
