import React from "react";
import "./Home.css";
import FrontContainer from "../FrontContainer/FrontContainer";
// import {
//   MessageContainerLeft,
//   MessageContainerRight,
// } from "../MessageContainer/MessageContainer";

export default function Home() {
  return (
    <>
      <div className="containerBox">
        <div className="frontCont">
          <FrontContainer />
        </div>
      </div>
      <div className="msgCont">
        {/* <MessageContainerLeft className="messageContainerLeft" /> */}
        {/* <MessageContainerRight /> */}
      </div>
    </>
  );
}
