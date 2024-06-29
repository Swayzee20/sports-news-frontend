import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import TeamSelectModal from "../TeamSelectModal/TeamSelectModal";
import PageNotFound from "../PageNotFound/PageNotFound";
import ErrorModal from "../ErrorModal/ErrorModal";

import {
  getNewsStories,
  getTeamSchedule,
  getTeams,
  getPlayerData,
} from "../../Utils/api";

import "./App.css";

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

function App() {
  const history = useHistory();
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const [activeModal, setActiveModal] = React.useState("");
  const [teamAbv, setTeamAbv] = React.useState("");
  const [myTeam, setMyTeam] = React.useState("");
  //mainly usef for profile page
  const [schedule, setSchedule] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [newsStories, setNewsStories] = React.useState([]);
  const [topPlayers, dispatch] = React.useReducer(playersReducer, initialState);
  const [passer, setPasser] = React.useState({});
  const [rusher, setRusher] = React.useState({});
  const [receiver, setReceiver] = React.useState({});
  const [topPlayer, setTopPlayer] = React.useState([]);
  const [error, setError] = React.useState("");

  const modalRef = React.useRef();

  function handleCloseModal() {
    setActiveModal("");
  }

  function handleSignUpModal() {
    setActiveModal("signup");
  }
  function handleLoginModal() {
    setActiveModal("login");
  }
  function handleTeamModal() {
    setActiveModal("teams");
  }
  function handleErrorModal() {
    setActiveModal("error");
  }

  function handleSetTeam(e) {
    setTeamAbv(e.target.value);
  }

  function handleTeamSubmit() {
    console.log("ran");
    setMyTeam(teamAbv);
  }

  //Loading data for profile page
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
    if (myTeam === "") {
      return;
    } else {
      setIsLoading(true);
      getTeamSchedule(myTeam)
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          } else {
            setSchedule(data.body.schedule);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          setError(err.toString());
          handleErrorModal();
          console.error(err);
        });
    }
  }, [myTeam]);

  React.useEffect(() => {
    if (myTeam === "") {
      return;
    } else {
      getTeams()
        .then((data) => {
          return data.body.filter((item) => item.teamAbv === myTeam);
        })
        .then((data) => {
          console.log(data);
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
            .catch((err) => {
              setError(err.toString());
              handleErrorModal();
              console.error(err);
            });
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
          setError(err.toString());
          handleErrorModal();
          console.log(err);
          console.error(err);
        });
    }
  }, [myTeam]);

  // For closing modal
  React.useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", (evt) => {
      if (evt.target === modalRef.current) {
        console.log("ran");
        handleCloseModal();
      }
    });
    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", (evt) => {
        if (evt.target.current === modalRef) {
          console.log("ran");
          handleCloseModal();
        }
      });
    };
  }, [activeModal]);

  return (
    <div className="app">
      <Header loggedIn={isLoggedIn} onClick={handleSignUpModal} />
      <Switch>
        <Route exact path="/">
          <Main
            loggedIn={isLoggedIn}
            onClick={{ handleSignUpModal, handleTeamModal }}
          />
        </Route>
        <ProtectedRoute path="/profile" loggedIn={isLoggedIn}>
          <Profile
            isLoading={isLoading}
            schedule={schedule}
            myTeam={myTeam}
            newsStories={newsStories}
            topPlayers={topPlayers}
            topPlayer={topPlayer}
          />
        </ProtectedRoute>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />

      {activeModal === "signup" && (
        <RegisterModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "signup"}
          handleLoginModal={handleLoginModal}
          isLoggedIn={isLoggedIn}
          modalRef={modalRef}
        />
      )}
      {activeModal === "login" && (
        <LoginModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "login"}
          handleSignUpModal={handleSignUpModal}
          isLoggedIn={isLoggedIn}
          modalRef={modalRef}
        />
      )}
      {activeModal === "teams" && (
        <TeamSelectModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "teams"}
          handleSetTeam={handleSetTeam}
          data={teamAbv}
          handleTeamSubmit={handleTeamSubmit}
          isLoggedIn={isLoggedIn}
          modalRef={modalRef}
        />
      )}
      {activeModal === "error" && (
        <ErrorModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "error"}
          errorMessage={error}
          modalRef={modalRef}
        ></ErrorModal>
      )}
    </div>
  );
}

export default App;
