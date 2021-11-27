import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../redux/apiCalls";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, password, email });
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };
  return (
    <div className="login">
      <h1>Sign Up</h1>
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        name="text"
        className="todo-input username"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
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
      <div className="LoginScreenButton">
        <button className="todo-button login-button">
          <Link to={"/login"}>Go Back</Link>
        </button>
        <button className="todo-button login-button" onClick={handleClick}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
