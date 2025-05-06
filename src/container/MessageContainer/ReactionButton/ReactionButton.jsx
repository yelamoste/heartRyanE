import React, { useState } from "react";
import "./ReactionButton.css";

export function ReactionButton() {
  const outlineHeart = "/outlineHeart.webp";
  const fullHeart = "/fullHeart.webp";

  const [likes, setLike] = useState("Like");
  const [images, setImages] = useState(outlineHeart);

  return (
    <div className="reactContainer">
      <img
        className="likeReact"
        alt="Like React"
        src={images}
        onClick={() => {
          likes === "Like"
            ? (setLike("Liked"), setImages(fullHeart))
            : (setLike("Like"), setImages(outlineHeart));
        }}
      />

      <p className="likeIdentifier">{likes}</p>
    </div>
  );
}
