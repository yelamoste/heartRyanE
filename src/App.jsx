import "./App.css";
import {
  MessageContainerLeft,
  MessageContainerRight,
} from "./container/MessageContainer/MessageContainer";
import FrontContainer from "./container/FrontContainer/FrontContainer";
import ParticlesComponent from "./container/ParticleComponent/ParticlesComponent";

function App() {
  return (
    <>
      <ParticlesComponent />
      <div className="containerBox">
        <MessageContainerLeft />
        <FrontContainer />
        <MessageContainerRight />
      </div>
    </>
  );
}

export default App;
