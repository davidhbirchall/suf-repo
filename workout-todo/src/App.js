import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        {/* Define each View (path) and their Controller (component) */}
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />

        <div className="container">
          <h2>SUF Workout To Do App</h2>
        </div>
      </Router>
    );
  }
}

export default App;