import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.changeNumber);
  return <h1>from Another component : {counter}</h1>;
};

export default Counter;
