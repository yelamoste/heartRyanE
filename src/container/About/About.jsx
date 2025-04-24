import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="briefInfo">
          <div className="navBtn">
            <button className="miniNavigation" id="mainInfo">
              Who is Heart Ryan?
            </button>
            <button className="miniNavigation" id="likes">
              What she likes?
            </button>
            <button className="miniNavigation" id="arts">
              Her arts {"<3"}
            </button>
          </div>
          <div className="detailsCont">
            <div className="contSection"></div>
          </div>
        </div>
        <div className="gallerySection">
          <div className="galleryContainer">
            <div className="rowContainer">
              <img
                src=""
                className="pictureContainerRectangle"
                id="rectanglePicture"
              />
              <img
                src="./heartryanefc.jpg"
                className="pictureContainerSquare"
                id="squareOne"
              />
            </div>
            <div className="rowContainer">
              <img src="" className="pictureContainerSquare" id="squareTwo" />
              <img src="" className="pictureContainerSquare" />
              <img src="" className="pictureContainerSquare" />
            </div>
            <div className="rowContainer">
              <img src="" className="pictureContainerSquare" />
              <img src="" className="pictureContainerRectangle" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
