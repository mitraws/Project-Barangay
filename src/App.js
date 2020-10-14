import { Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/index.js";
import Home from "./Components/Pages/Home";
import Rooms from "./Components/Pages/Rooms";
import AboutUs from "./Components/Pages/AboutUs";
import GoodToKnow from "./Components/Pages/GoodToKnow";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <div className="App">

      <NavBar />

      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/goodtoknow" component={GoodToKnow} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </header>
    </div>
  );
}
export default App;
