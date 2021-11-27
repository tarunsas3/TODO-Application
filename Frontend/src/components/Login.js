import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        name="text"
        className="todo-input username"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        name="text"
        type="password"
        className="todo-input password"
      />
      {/* <div className="LoginScreenButton"> */}
      <button className="todo-button login-button" onClick={handleClick}>
        Login
      </button>
      {/* <button className="todo-button login-button">
          <Link to={"/register"}>Sign Up</Link>
        </button> */}
      {/* </div> */}
    </div>
  );
}

export default Login;
