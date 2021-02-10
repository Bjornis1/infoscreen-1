import DadJokes from "./DadJokes";
import Bikes from "./Bikes";
import Clock from "./Clock";
import Weather from "./Weather";
import Resort from "./Resort";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Resort />
      <Clock />
      <DadJokes />
      <Bikes />
      <Weather />
    </div>
  );
}

export default App;
