import { GetData } from "./components/GetData/GetData";
import "../src/CuantoTeDebo.css";
import { useState } from "react";
import { GetResult } from "./components/GetResult/GetResult";
export const CuantoTeDebo = () => {
  const [amountPeople, setAmountPeople] = useState([]);
  const [totalAmount, setTotalAmount] = useState("");
  const [members, setMembers] = useState([]);
  const [showWindow, setShowWindow] = useState(0);

  console.log(members);
  let fragment;
  if (showWindow === 0) {
    fragment = (
      <GetData
        setAmountPeople={setAmountPeople}
        setMembers={setMembers}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        amountPeople={amountPeople}
        setShowWindow={setShowWindow}
      />
    );
  }

  if (showWindow === 1) {
    fragment = (
      <GetResult resto={totalAmount / amountPeople} members={members} />
    );
  }
  return <>{fragment}</>;
};
