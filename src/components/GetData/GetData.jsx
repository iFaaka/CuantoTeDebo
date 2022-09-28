import React from "react";
import { Triangle } from "../Helpers/Triangle";
import { Intro } from "../Intro/Intro";
import { HowMuch } from "../HowMuch/HowMuch";
import { MemberList } from "../MemberList/MemberList";

export const GetData = ({
  amountPeople,
  setAmountPeople,
  setMembers,
  members,
  totalAmount,
  setTotalAmount,
  setShowWindow,
}) => {
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
        {amountPeople.length > 0 && (
          <HowMuch setTotalAmount={setTotalAmount} members={members} />
        )}
      </div>

      <div className="totalmoney-section">
        {totalAmount !== "" && (
          <MemberList
            setMembers={setMembers}
            totalAmount={totalAmount}
            amountPeople={amountPeople}
            setShowWindow={setShowWindow}
          />
        )}
      </div>
    </div>
  );
};
