import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from ".././firebase.js";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      window.location.href = "/home";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="logIn">
      <div className="logInContainer">
        <form onSubmit={handleSubmit}>
          <div className="loginForm">
            <p className="logInTitle">Log in</p>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
