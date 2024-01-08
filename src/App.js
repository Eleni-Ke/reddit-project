import logo from "./logo.svg";
import "./App.css";
import LeftNavBar from "./Components/LeftNavBar/LeftNavBar";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App min-vh-100">
      <NavBar />
      <LeftNavBar />
      <Main />
    </div>
  );
}

export default App;
