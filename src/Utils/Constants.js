const baseUrl =
  "https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com";

const registerInputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    minLength: "2",
    maxLength: "30",
    required: true,
    errorMessage: "Username is required and must be 2-30 characters",
    label: "Username",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    errorMessage: "Must enter a valid email",
    label: "Email",
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    minLength: "2",
    maxLength: "30",
    required: true,
    errorMessage: "Password must be between 2 and 30 characters",
    label: "Password",
  },
];

const loginInputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    errorMessage: "Must enter a valid email",
    label: "Email",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Password",
    minlength: "2",
    maxlength: "30",
    required: true,
    errorMessage: "Password must be between 2 and 30 characters",
    label: "Password",
  },
];

const teams = [
  { value: "ARI", label: "Arizona Cardinals" },
  { value: "ATL", label: "Atlanta Falcons" },
  { value: "BAL", label: "Baltimore Ravens" },
  { value: "BUF", label: "Buffalo Bills" },
  { value: "CAR", label: "Carolina Panthers" },
  { value: "CHI", label: "Chicago Bears" },
  { value: "CIN", label: "Cincinnati Bengals" },
  { value: "CLE", label: "Clevelend Bronws" },
  { value: "DAL", label: "Dallas Cowboys" },
  { value: "DEN", label: "Denver Broncos" },
  { value: "DET", label: "Detroit Lions" },
  { value: "GB", label: "Green Bay Packers" },
  { value: "HOU", label: "Houston Texans" },
  { value: "IND", label: "Indianapolis Colts" },
  { value: "JAX", label: "Jacksonville Jaguars" },
  { value: "KC", label: "Kansas City Chiefs" },
  { value: "LV", label: "Las Vegas Raiders" },
  { value: "LAC", label: "Los Angeles Chargers" },
  { value: "LAR", label: "Los Angeles Rams" },
  { value: "MIA", label: "Miami Dolphins" },
  { value: "MIN", label: "Minnesota Vikings" },
  { value: "NE", label: "New England Patriots" },
  { value: "NO", label: "New Orleans Saints" },
  { value: "NYG", label: "New York Giants" },
  { value: "NYJ", label: "New York Jets" },
  { value: "PIT", label: "Pittsburgh Steelers" },
  { value: "PHI", label: "Philadelphia Eagles" },
  { value: "SF", label: "San Francisco 49ers" },
  { value: "SEA", label: "Seattle Seahawks" },
  { value: "TB", label: "Tampa Bay Buccaneers" },
  { value: "TEN", label: "Tennessee Titans" },
  { value: "WSH", label: "Washington Commanders" },
];

export { baseUrl, registerInputs, loginInputs, teams };
