import React from "react";
import "./stylesheets/Triangle.css";
export const Triangle = ({ changeColor, seeSide }) => {
  return <div className={`triangle ${seeSide} ${changeColor}`}></div>;
};
