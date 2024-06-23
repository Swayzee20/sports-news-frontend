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
import { getNewsStories } from "../../Utils/api";

import "./App.css";

function App() {
  const history = useHistory();
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const [activeModal, setActiveModal] = React.useState("");
  const [teamAbv, setTeamAbv] = React.useState("");
  const [myTeam, setMyTeam] = React.useState("");

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

  function handleSetTeam(e) {
    setTeamAbv(e.target.value);
    console.log(teamAbv);
  }

  function handleTeamSubmit() {
    console.log("ran");
    setMyTeam(teamAbv);
  }

  // React.useEffect(() => {
  //   getNewsStories()
  //     .then((data) => {
  //       let title = "";
  //       let image = "";
  //       let link = "";
  //       data.body.forEach((item) => {
  //         console.log(item.image);
  //         title = item.title;
  //         image = item.image;
  //         link = item.link;
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <div className="App">
      <Header loggedIn={isLoggedIn} onClick={handleSignUpModal} />
      <Switch>
        <Route exact path="/">
          <Main
            loggedIn={isLoggedIn}
            onClick={{ handleSignUpModal, handleTeamModal }}
          />
        </Route>
        <ProtectedRoute path="/profile" loggedIn={isLoggedIn}>
          <Profile abv={myTeam} />
        </ProtectedRoute>
      </Switch>
      <Footer />
      {activeModal === "signup" && (
        <RegisterModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "signup"}
          handleLoginModal={handleLoginModal}
          isLoggedIn={isLoggedIn}
        />
      )}
      {activeModal === "login" && (
        <LoginModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "login"}
          handleSignUpModal={handleSignUpModal}
          isLoggedIn={isLoggedIn}
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
        />
      )}
    </div>
  );
}

export default App;
