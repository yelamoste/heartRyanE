import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="briefInfo">
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
        <div className="gallerySection"></div>
      </div>
    </>
  );
};

export default About;
