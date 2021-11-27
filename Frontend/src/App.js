import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
// import Register from "./components/Register";
import { ACCESS_TOKEN } from "./requestMethods";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="todo-app">
            {ACCESS_TOKEN ? <TodoList /> : <Login />}
          </div>
        </Route>
        <Route path="/login">
          <div className="todo-app">
            {ACCESS_TOKEN ? <TodoList /> : <Login />}
          </div>
        </Route>
        {/* <Route path="/register">
          <div className="todo-app">
            {ACCESS_TOKEN ? <TodoList /> : <Register />}
          </div>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
