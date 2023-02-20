import React from "react";
import ToppingButton from "./ToppingButton";
import TurtleCard from "./TurtleCard";
import { data } from "./data";
function CardBox(props) {
  return (
    <div className="card-box">
      {data.map((turtle) => (
        <TurtleCard
          name={turtle.name}
          imgUrl={turtle.img}
          toppingArr={turtle.pizzaToppings}
        />
      ))}
    </div>
  );
}

export default CardBox;
