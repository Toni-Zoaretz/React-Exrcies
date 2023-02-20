import React from "react";
import ToppingButton from "./ToppingButton";
import { data } from "./data";

function TurtleCard(props) {
  return (
    <div className="turtle-card">
      <h2>{props.name}</h2>
      <img src={props.imgUrl} />
      <h3>Toppings:</h3>
      <div>
        {props.toppingArr.map((topping) => (
          <ToppingButton topping={topping.name} />
        ))}
      </div>
    </div>
  );
}

export default TurtleCard;
