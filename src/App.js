import React, { useState } from "react";
import Random from "./containers/Random/Random";
import Search from "./containers/Search/Search";
import Trending from "./containers/Trending/Trending";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AlertContext from "./contexts/alertContext";

function App() {
  const [error, setError] = useState("");
  return (
    <div className="App">
      <AlertContext.Provider value={{ error, setError }}>
        <Router basename="/">
          <Switch>
            <Route exact path="/" component={Random} />
            <Route path="/search" component={Search} />
            <Route path="/trending" component={Trending} />
          </Switch>
        </Router>
      </AlertContext.Provider>
    </div>
  );
}

export default App;
