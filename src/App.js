import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Switch>
        <Route path="/chat">
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
