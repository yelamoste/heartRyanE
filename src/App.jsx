import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="heartPicture"></div>
        <p className="greetingsText" id="greetingsText1">
          Happy
        </p>
        <p className="greetingsText" id="greetingsText2">
          Birthday,
        </p>
        <p className="heartName">Heart Ryan!</p>
      </div>
      <div className="confettiDesign" id="confettiLeft"></div>
      <div className="confettiDesign" id="confettiRight"></div>
    </>
  );
}

export default App;
