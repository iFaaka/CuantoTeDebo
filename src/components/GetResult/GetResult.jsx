import React from "react";

export const GetResult = ({ resto, members }) => {
  const calculoReparto = () => {
    const myArr = members.map((item) => {
      return { name: item.name, amount: item.amount - resto };
    });
    return myArr;
  };
  const newArr = calculoReparto();
  return <div>{newArr}</div>;
};
