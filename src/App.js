import { Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/index.js";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import AboutUs from "./Pages/AboutUs";
import GoodToKnow from "./Pages/GoodToKnow";
import Contact from "./Pages/Contact";

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
