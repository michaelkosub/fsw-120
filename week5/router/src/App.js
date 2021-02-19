import React from "react";
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import Pricing from "./Pricing"
import About from "./About"
import './App.css';

function App() {
  return (
    <div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/pricing">Pricing</Link>
    </div>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
      </Switch>
    </div>
    <div>
      <footer>
        <h6> Thank you for coming.</h6>
      </footer>
    </div>


  </div>
  );
}

export default App;
