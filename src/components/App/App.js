import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <LoginModal />
      {/* <RegisterModal /> */}
    </div>
  );
}

export default App;
