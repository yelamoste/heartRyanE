import React, { useState } from "react";
import "./Booth.css";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1080,
  height: 1080,
  aspectRatio: 1.777777778,
  facingMode: "user",
};

function Booth() {
  const [captured, setCaptured] = useState("");
  const btnText = "SMILE :)";
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCaptured(imageSrc);
    console.log(imageSrc, "imageSrc");
  }, [webcamRef]);

  return (
    <>
      <div className="boothContainer">
        <div className="frameContainer"></div>
        <div className="cameraContainer">
          <Webcam
            className="webCam"
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            screenshotQuality={1}
            mirrored={true}
          />

          <button onClick={capture} className="btnCapture">
            {btnText}
          </button>
        </div>
        <div className="frameImage">
          <img src={captured} id="imgCaptured" />
        </div>
      </div>
    </>
  );
}

export default Booth;
