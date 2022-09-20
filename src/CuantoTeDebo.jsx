import React from "react";
import "../src/CuantoTeDebo.css";
import { CuantoPusieron } from "./components/CuantoPusieron/CuantoPusieron";
import { Triangle } from "./components/Helpers/Triangle";
import { Intro } from "./components/Intro/Intro";

export const CuantoTeDebo = () => {
  return (
    <div className="main-app">
      <div className="welcome-section">
        <h1>¿Cuanto te debo..?</h1>
        <Triangle id="welcome-triangle" />
      </div>

      <div className="intro-section">
        <Intro />
      </div>

      <div className="totalmoney-section">
        <CuantoPusieron />
      </div>
    </div>
  );
};
