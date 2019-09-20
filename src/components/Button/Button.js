import React from "react";

const updatedStyle = {
  color: "white",
  backgroundColor: "#2C3E50"
};

const button = ({ index, content, changeColor, handleToggle }) => (
  <button
    className="btn border m-2"
    style={changeColor ? updatedStyle : null }
    onClick={() => handleToggle(index)}
  >
    {content}
  </button>
);

export default button;
