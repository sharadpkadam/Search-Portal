// ThreeSixty.js
import React, { useState } from "react";

const ThreeSixty = ({ imagePath }) => {
  const imageSrc = require(`../images/${imagePath}`);
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (event) => {
    const width = event.currentTarget.offsetWidth;
    const offsetX =
      event.clientX - event.currentTarget.getBoundingClientRect().left;
    const newRotation = (offsetX / width) * 360;
    setRotation(newRotation);
  };

  return (
    <div
      className="three-sixty-container"
      onMouseMove={handleMouseMove}
      style={{ overflow: "hidden", cursor: "pointer" }}
    >
      <div
        className="three-sixty-image"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <img src={imageSrc} alt="360 view" width={500} height={300}/>
        {/* Add as many images as needed for the 360 view */}
      </div>
    </div>
  );
};

export default ThreeSixty;
