import "./App.css";
import {
  MessageContainerLeft,
  MessageContainerRight,
} from "./container/MessageContainer/MessageContainer";
import FrontContainer from "./container/FrontContainer/FrontContainer";

function App() {
  return (
    <>
      <div className="containerBox">
        <MessageContainerLeft />
        <FrontContainer />
        <MessageContainerRight />
      </div>
    </>
  );
}

export default App;
