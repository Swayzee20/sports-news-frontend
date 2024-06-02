import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Profile />
      <Footer />
      {/* <LoginModal /> */}
      {/* <RegisterModal /> */}
    </div>
  );
}

export default App;
