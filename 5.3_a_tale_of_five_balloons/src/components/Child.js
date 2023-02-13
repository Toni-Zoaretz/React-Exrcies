import React from "react";
import Baloons from "./Baloons";
import "../5.3.css";

function Child(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <Baloons color={props.color} />
    </>
  );
}

export default Child;
