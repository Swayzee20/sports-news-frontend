import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import { getNewsStories } from "../../Utils/api";

import "./App.css";

function App() {
  const history = useHistory();
  const [isLoggedIn, setLoggedIn] = React.useState(false);
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
          <Main loggedIn={isLoggedIn} onClick={handleSignUpModal} />
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
