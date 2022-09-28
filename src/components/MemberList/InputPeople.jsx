import React from "react";
import { useState } from "react";

export const InputPeople = ({ setListPersons }) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const handleChange = (e, id) => {
    id === 0 ? setInputAmount(e.target.value) : setInputName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputName.length !== 0 && inputAmount >= 0
      ? setListPersons((prevS) => [
          ...prevS,
          { name: inputName, amount: inputAmount },
        ])
      : alert("Ingrese una persona y cuanto puso");
    setInputName("");
    setInputAmount(0);
  };
  return (
    <form onSubmit={handleSubmit} className="integ-input-group">
      <input
        value={inputName}
        onChange={(e) => handleChange(e, 1)}
        type="text"
        className="integ-input-name"
      />
      <input
        value={inputAmount}
        onChange={(e) => handleChange(e, 0)}
        type="number"
        className="integ-input-amount"
      />

      <button type="submit">Cargar persona</button>
    </form>
  );
};
