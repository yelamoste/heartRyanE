import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./container/Home/Home";
import Navbar from "./container/Navbar/Navbar";

import ParticlesComponent from "./container/ParticleComponent/ParticlesComponent";
import About from "./container/About/About";
import Booth from "./container/Booth/Booth";
import { Message } from "./container/Message/Message";
import MessageBoard from "./container/MessageBoard/MessageBoard";
import { auth } from "./container/firebase";
import { useState, useEffect } from "react";
import Login from "./container/Login/Login";
import SendAMessage from "./container/SendAMessage/SendAMessage";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <>
      <ParticlesComponent />
      <div className="mainContainer">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/login" /> : <Login />}
          />
          <Route path="/sendAMsg" element={<SendAMessage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hearty" element={<About />} />
          <Route path="/booth" element={<Booth />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/messageboard" element={<MessageBoard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
