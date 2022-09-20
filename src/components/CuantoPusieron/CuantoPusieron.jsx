import React from "react";
import { Triangle } from "../Helpers/Triangle";
import "./stylesheets/CuantoPusieron.css";
export const CuantoPusieron = () => {
  return (
    <div id="integ-section">
      <div id="integ-head-section">
        <div id="integ-title">
          <span>Nombre</span>
          <span>Puso</span>
        </div>

        <div id="integ-input-section">
          <div className="integ-input-group">
            <input type="text" className="integ-input-name" />
            <input type="text" className="integ-input-amount" />
          </div>
          <div className="integ-input-group">
            <input type="text" className="integ-input-name" />
            <input type="text" className="integ-input-amount" />
          </div>
          <div className="integ-input-group">
            <input type="text" className="integ-input-name" />
            <input type="text" className="integ-input-amount" />
          </div>
          <div className="integ-input-group">
            <input type="text" className="integ-input-name" />
            <input type="text" className="integ-input-amount" />
          </div>
          <div className="integ-input-group">
            <input type="text" className="integ-input-name" />
            <input type="text" className="integ-input-amount" />
          </div>
        </div>
      </div>
      <div id="integ-rest-section">
        <span id="integ-rest-title">Para llegar al total faltan:</span>
        <span id="integ-rest-amount">$000</span>
        <Triangle changeColor="white" />
      </div>
    </div>
  );
};
