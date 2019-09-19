import React from "react";

const button = ({ index, content, changeColor, handleToggle }) => (
  <button
    className="btn border m-2"
    style={{
      backgroundColor: changeColor.backgroundColor,
      color: changeColor.color
    }}
    onClick={() => handleToggle(index)}
  >
    {content}
  </button>
);

export default button;
