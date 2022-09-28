import React from "react";
import { ListMember } from "./ListMember";
import "./stylesheets/MemberList.css";
export const MemberList = ({
  setMembers,
  totalAmount,
  amountPeople,
  setShowWindow,
}) => {
  return (
    <div id="integ-section">
      <div id="integ-head-section">
        <div id="integ-title">
          <span>Nombre</span>
          <span>Puso</span>
        </div>

        <div id="integ-input-section">
          <ListMember
            setMembers={setMembers}
            totalAmount={totalAmount}
            amountPeople={amountPeople}
            setShowWindow={setShowWindow}
          />
        </div>
      </div>
    </div>
  );
};
