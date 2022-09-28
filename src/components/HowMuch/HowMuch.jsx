import React from "react";
import { useState } from "react";
import { Triangle } from "../Helpers/Triangle";
import "./stylesheets/HowMuch.css";
export const HowMuch = ({ setTotalAmount }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue > 0
      ? setTotalAmount(inputValue)
      : alert("Ups parece que no hay nada que dividir");
  };

  return (
    <div className="howm-container">
      <div className="howm-header-container">
        <span className="howm-header-title">El total fue de:</span>
        <form onSubmit={handleSubmit}>
          <div className="howm-header-price-container">
            <label className="howm-header-price-sign">$</label>
            <input
              autoComplete="off"
              onChange={handleChange}
              value={inputValue}
              type="number"
              className="howm-header-input"
            />
            <button type="submit">Cargar</button>
          </div>
        </form>
      </div>

      <div className="howm-bottom-container">
        <p className="howm-bottom-title">
          Ahora necesitamos saber quienes son y cuanto pusieron
        </p>

        <span className="howm-bottom-text">
          (Es importante que todos sean listados, incluso los que no pusieron
          dinero)
        </span>
      </div>
    </div>
  );
};
