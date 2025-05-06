import React, { useState } from "react";
import "./About.css";
function About() {
  const [changeButton, setChangeButton] = useState("Page1");
  const style1 = () => {
    return changeButton == "Page1"
      ? { backgroundColor: "#df36c2 ", color: "white" }
      : {};
  };
  const style2 = () => {
    return changeButton == "Page2"
      ? { backgroundColor: "#df36c2", color: "white" }
      : {};
  };
  const style3 = () => {
    return changeButton == "Page3"
      ? { backgroundColor: "#df36c2", color: "white" }
      : {};
  };

  return (
    <>
      <div className="aboutContainer">
        <div className="briefInfo">
          <div className="navBtn">
            <button
              className="miniNavigation"
              id="mainInfo"
              style={style1()}
              onClick={() => setChangeButton("Page1")}
            >
              Who is Heart Ryan?
            </button>
            <button
              className="miniNavigation"
              id="likes"
              style={style2()}
              onClick={() => setChangeButton("Page2")}
            >
              What she likes?
            </button>
            <button
              className="miniNavigation"
              id="arts"
              style={style3()}
              onClick={() => setChangeButton("Page3")}
            >
              Her arts {"<3"}
            </button>
          </div>
          <div className="detailsCont">
            <div className="contSection">
              <MiniNav changeBtn={changeButton} />
            </div>
          </div>
        </div>
        <div className="gallerySection">
          <div className="galleryContainer">
            <div className="rowContainer">
              <img
                src="./hre/left-rectangle.webp"
                className="pictureContainerRectangle"
                id="rectanglePicture"
              />
              <img
                src="./hre/left-square.webp"
                className="pictureContainerSquare"
                id="squareOne"
              />
            </div>
            <div className="rowContainer">
              <img
                src="./hre/top-square.webp"
                className="pictureContainerSquare"
                id="squareTwo"
              />
              <img
                src="./hre/mid-square.webp"
                className="pictureContainerSquare"
              />
              <img
                src="./hre/bottom-square.webp"
                className="pictureContainerSquare"
              />
            </div>
            <div className="rowContainer">
              <img
                src="./hre/right-square.webp"
                className="pictureContainerSquare"
              />
              <img
                src="./hre/right-rectangle.webp"
                className="pictureContainerRectangle"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const MiniNav = (props) => {
  if (props.changeBtn == "Page2") {
    return (
      <div className="miniNavCont">
        <div className="inLineText">
          <p className="boldName">Awit:</p>
          <p className="regularName">Awit</p>
        </div>
      </div>
    );
  } else if (props.changeBtn == "Page3") {
    return (
      <div className="miniNavCont">
        <div className="inLineText">
          <p className="boldName">Ohlala:</p>
          <p className="regularName">Ohlala</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="miniNavCont">
        <div className="inLineText">
          <p className="boldName">Name:</p>
          <p className="regularName">Heart Ryan Evangelista</p>
        </div>
        <div className="inLineText">
          <p className="boldName">Age:</p>
          <p className="regularName">21</p>
        </div>
        <div className="inLineText">
          <p className="boldName">Birthday:</p>
          <p className="regularName">April 9, 2002</p>
        </div>
        <div className="inLineText">
          <p className="boldName">Occupation:</p>
          <p className="regularName">Singer, Artist</p>
        </div>
        <div className="inLineText">
          <p className="boldName">Name:</p>
          <p className="regularName">Heart Ryan Evange</p>
        </div>
      </div>
    );
  }
};

export default About;
