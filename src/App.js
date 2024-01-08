import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "react-bootstrap";
import LeftNavBar from "./Components/LeftNavBar/LeftNavBar";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LeftNavBar />
      <Main />
    </div>
  );
}

export default App;
