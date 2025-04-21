import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./container/Home/Home";
import Navbar from "./container/Navbar/Navbar";

import ParticlesComponent from "./container/ParticleComponent/ParticlesComponent";
import About from "./container/About/About";
import Booth from "./container/Booth/Booth";
import { Message } from "./container/Message/Message";

function App() {
  return (
    <>
      <ParticlesComponent />
      <div className="mainContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hearty" element={<About />} />
          {/* <Route path="/booth" element={<Booth />} />
          <Route path="/messages" element={<Message />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
