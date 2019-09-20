import React from "react";

const button = ({ index, content, color, handleClick }) => (
  <button
    className="btn border m-2"
    style={color}
    onClick={handleClick}
  >
    {content}
  </button>
);

export default button;
