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
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  return (
    <div className="App">
      <Header loggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute path="/profile" loggedIn={isLoggedIn}>
          <Profile />
        </ProtectedRoute>
      </Switch>
      <Footer />
      {/* <LoginModal /> */}
      {/* <RegisterModal /> */}
    </div>
  );
}

export default App;
