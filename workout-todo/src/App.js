import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>

        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="https://facebook.com/suitsufitness" target="_blank">
                <img src={logo} width="30" height="30" alt="SUF" />
              </a>
              <Link to="/" className="navbar-brand">SUF Todo App</Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">To dos</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Todo</Link>
                  </li>
                </ul>
              </div>
          </nav>

          <br/>



        {/* Define each View (path) and their Controller (component) */}
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />

        </div>
        {/* End Container */}

      </Router>
    );
  }
}

export default App;