import React from "react";
import { Triangle } from "../Helpers/Triangle";
import { useState } from "react";
import { InputPeople } from "./InputPeople";

export const ListMember = ({
  setMembers,
  totalAmount,
  amountPeople,
  setShowWindow,
}) => {
  const [listPersons, setListPersons] = useState([]);
  let amountLess = 0;
  return (
    <div>
      {listPersons.length < amountPeople ? (
        <InputPeople setListPersons={setListPersons} />
      ) : (
        setMembers(listPersons)
      )}

      {listPersons.map((item) => {
        amountLess += parseInt(item.amount);
        return (
          <li>
            {item.name} ------- {item.amount}{" "}
          </li>
        );
      })}
      <div id="integ-rest-section">
        <span id="integ-rest-title">Para llegar al total faltan:</span>
        <span id="integ-rest-amount">$ {totalAmount - amountLess}</span>
        {/*     <Triangle changeColor="white" /> */}
        <button onClick={() => setShowWindow((prevS) => prevS + 1)}>
          ¡Estamos listos!
        </button>
      </div>
    </div>
  );
};
