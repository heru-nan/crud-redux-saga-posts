import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Post from "./Post";
import Posts from "./Posts";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route
          exact
          path="/posts/:id"
          render={({ match }) => <Post match={match} />}
        />
        <h1>not found</h1>
      </Switch>
    </Router>
  );
}

export default App;
