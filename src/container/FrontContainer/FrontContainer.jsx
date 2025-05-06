import React from "react";
import "./FrontContainer.css";

const FrontContainer = () => {
  const heartImg = "/hreImage.png";
  return (
    <div className="frontContainer">
      <div className="heartPicture">
        <img src={heartImg} alt="" className="heartImage" />
      </div>
      <div className="textContainer">
        <p className="greetingsText" id="greetingsText1">
          Happy
        </p>
        <p className="greetingsText" id="greetingsText2">
          Birthday,
        </p>
      </div>
      <p className="heartName">Heart Ryan!</p>
    </div>
  );
};

export default FrontContainer;
