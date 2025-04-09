import React from "react";
import "./MessageContainer.css";
import "./Messages.css";
import { ReactionButton } from "./ReactionButton/ReactionButton";

export function Messages(props) {
  const details = props.details;
  const name = details.name;
  const content = details.content;
  const image = details.image;
  const time = details.time;

  return (
    <div className="messageContainer">
      <div className="nameContainer">
        <div className="imageContainer">
          <img className="imageContent" src={image} />
        </div>
        <div className="nameAlignment">
          <p className="nameMessage">{name}</p>
          <p className="dateTime">{time}</p>
        </div>
      </div>
      <p className="contentMessage">{content}</p>
      <div className="reactionContainer">
        <ReactionButton />
      </div>
    </div>
  );
}

export function MessageContainerLeft() {
  return (
    <div className="messageDesign">
      <Messages
        className="messageHover"
        details={{
          image: "/heartryanefc.jpg",
          time: "10:00 PM",
          name: "HeartBeatsOFCalsdaksjdlaksjdlasjdkasjdlakjsdlaksjdlkajsldkajsdlkajldkj",
          content: "hello",
        }}
      />
      <Messages
        className="messageHover"
        details={{
          image: "",
          time: "5:00 PM",
          name: "Darcel",
          content: "hello",
        }}
      />
    </div>
  );
}

export function MessageContainerRight() {
  return (
    <div className="messageDesign">
      <Messages
        className="messageHover"
        details={{
          image: "",
          time: "",
          name: "Awiticisizism",
          content: "call me baby",
        }}
      />
      <Messages
        className="messageHover"
        details={{
          image: "",
          time: "",
          name: "holasoydora",
          content: "cringe",
        }}
      />
    </div>
  );
}
