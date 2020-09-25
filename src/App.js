import { Switch, Route } from "react-router-dom";
import React from 'react';
import './App.css';
// import HomePage from "./pages/Homepage";
// import RoomsPage from "./pages/RoomsPage";
// import AboutUsPage from "./pages/AboutUsPage";
// import GoodToKnowPage from "./pages/GoodToKnowPage";
// import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> 
        <Route path="/rooms" component={RoomsPage} /> 
        <Route path="/about" component={AboutUsPage} />
        <Route path="/goodtoknow" component={GoodToKnowPage} /> 
        <Route path="/contact" component={ContactPage} />  */}
      </Switch>
    </div>
  );
}

export default App;
