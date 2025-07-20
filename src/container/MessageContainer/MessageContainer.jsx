import "./MessageContainer.css";
import "./Messages.css";
import { useState } from "react";

const MessageContainer = ({ name, content, image, time }) => {
  const outlineHeart = "/outlineHeart.webp";
  const fullHeart = "/fullHeart.webp";

  const [likes, setLike] = useState("Like");
  const [images, setImages] = useState(outlineHeart);
  const handleReaction = () => {
    likes === "Like"
      ? setLike("Liked") && setImages(fullHeart)
      : setLike("Like") && setImages(outlineHeart);
  };
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
        <div className="reactContainer">
          <img
            className="likeReact"
            alt="Like React"
            src={images}
            onClick={handleReaction}
          />

          <p className="likeIdentifier">{likes}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
