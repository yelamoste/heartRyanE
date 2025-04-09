import React from "react";
import "./FrontContainer.css";

const FrontContainer = () => {
  return (
    <div className="frontContainer">
      <div className="heartPicture">
        <img src="" alt="" className="heartImage" />
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
