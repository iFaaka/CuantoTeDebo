import React from "react";
import "./stylesheets/Triangle.css";
export const Triangle = ({ changeColor }) => {
  return <div className={`triangle ${changeColor}`}></div>;
};
