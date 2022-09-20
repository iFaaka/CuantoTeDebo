import React from "react";
import { Triangle } from "../Helpers/Triangle";
import "./stylesheets/Intro.css";
export const Intro = () => {
  return (
    <div className="intro-section">
      <h2>
        ¿Pasaron cosas y nadie sabe{" "}
        <span style={{ color: "#FF7A00" }}>matematica basica</span>?
      </h2>
      <div className="howmany-section">
        <span id="howmany-manito">Voy a darles una manito</span>
        <div id="howmany-img-container">
          <img
            src="https://c.tenor.com/1vWggXqzqQ8AAAAC/nouns-nounish.gif"
            id="howmany-img"
          />
        </div>
        <div id="howmany-input-container">
          <span id="howmany-how">¿Cuantos son?</span>
          <input id="howmany-input" type="text" />
        </div>

        <Triangle />
      </div>
    </div>
  );
};
