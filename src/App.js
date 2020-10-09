import { Switch, Route } from "react-router-dom";
import React from 'react';
import './App.css';
// import Home from "./pages/Home";
// import Rooms from "./pages/Rooms";
// import AboutUs from "./pages/AboutUs";
// import GoodToKnow from "./pages/GoodToKnow";
// import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Home} /> 
        <Route path="/rooms" component={Rooms} /> 
        <Route path="/about" component={AboutUs} />
        <Route path="/goodtoknow" component={GoodToKnow} /> 
        <Route path="/contact" component={Contact} />  */}
      </Switch>
   </div>
  );
}
export default App;
