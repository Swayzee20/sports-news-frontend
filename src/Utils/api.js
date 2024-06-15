import { baseUrl } from "./Constants";

function handleServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getNewsStories() {
  return fetch(`${baseUrl}/getNFLNews?recentNews=true&maxItems=5`, {
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

export { getNewsStories };
