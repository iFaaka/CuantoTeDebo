import React from "react";
import "../src/CuantoTeDebo.css";
import { MemberList } from "./components/MemberList/MemberList";
import { Triangle } from "./components/Helpers/Triangle";
import { Intro } from "./components/Intro/Intro";
import { HowMuch } from "./components/HowMuch/HowMuch";
import { useState } from "react";

export const CuantoTeDebo = () => {

  const [amountPeople, setAmountPeople] = useState(1)
  const [totalAmount, setTotalAmount] = useState(1)
  const [members, setMembers] = useState(['dsadsa'])

  return (
    <div className="main-app">
      <div className="welcome-section">
        <h1>¿Cuanto te debo..?</h1>
        <Triangle id="welcome-triangle" />
      </div>

      <div className="intro-section">
        <Intro setAmountPeople={setAmountPeople} />
      </div>

     
      <div>
      {amountPeople != '' && <HowMuch setTotalAmount={setTotalAmount}/>}
      </div>
      
      <div className="totalmoney-section">
      {totalAmount != '' && <MemberList />}
      </div>

      <div>
        {members.length > 0 && console.log('cargando')}
      </div>
    </div>
  );
};
