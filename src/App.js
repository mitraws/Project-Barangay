import { Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/index.js";
import Home from "./Components/Pages/Home/Home";
import Rooms from "./Components/Pages/Rooms";
import AboutUs from "./Components/Pages/AboutUs";
import GoodToKnow from "./Components/Pages/GoodToKnow";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Footer";
import GridPage from "./Components/Pages/Home/Grid";

function App() {
  return (
    <div>
      <NavBar />
      <div className="page-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/grid" component={GridPage} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/goodtoknow" component={GoodToKnow} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}
export default App;
