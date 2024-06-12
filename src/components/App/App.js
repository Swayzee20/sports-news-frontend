import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

import "./App.css";

function App() {
  const history = useHistory();
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const [activeModal, setActiveModal] = React.useState("");

  function handleCloseModal() {
    setActiveModal("");
  }

  function handleSignUpModal() {
    setActiveModal("signup");
  }
  function handleLoginModal() {
    setActiveModal("login");
  }

  return (
    <div className="App">
      <Header loggedIn={isLoggedIn} onClick={handleSignUpModal} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute path="/profile" loggedIn={isLoggedIn}>
          <Profile />
        </ProtectedRoute>
      </Switch>
      <Footer />
      {activeModal === "signup" && (
        <RegisterModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "signup"}
          handleLoginModal={handleLoginModal}
        />
      )}
      {activeModal === "login" && (
        <LoginModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "login"}
          handleSignUpModal={handleSignUpModal}
        />
      )}
    </div>
  );
}

export default App;
