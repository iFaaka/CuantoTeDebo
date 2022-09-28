import React from "react";
import { useState } from "react";
import { Triangle } from "../Helpers/Triangle";
import "./stylesheets/Intro.css";
export const Intro = ({ setAmountPeople }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    inputValue < 25 && inputValue > 0
      ? setAmountPeople(inputValue)
      : alert("No trabajamos con tanta gente, nuestro maximo es 25");
    setInputValue("");
  };

  return (
    <div className="intro-section">
      <h2>
        ¿Pasaron cosas y nadie sabe{" "}
        <span style={{ color: "#FF7A00" }}>matematica basica</span>?
      </h2>
      <div className="intro-container">
        <span id="intro-manito">Voy a darles una manito</span>
        <div id="intro-img-container">
          <img
            src="https://c.tenor.com/1vWggXqzqQ8AAAAC/nouns-nounish.gif"
            id="intro-img"
          />
        </div>
        <div id="intro-input-container">
          <span id="intro-how">¿Cuantos son?</span>
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              id="intro-input"
              type="number"
              onChange={(e) => handleChange(e)}
              value={inputValue}
            />
            <button type="submit" id="intro-input-buttom">
              <Triangle seeSide="right" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
