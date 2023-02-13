import React from "react";
import Child from "./Child";
import "../5.3.css";

function Mother() {
  const kids = [
    { name: "Ori", color: "red" },
    { name: "Ron", color: "blue" },
    { name: "Sigalit", color: "green" },
    { name: "Ruti", color: "yellow" },
    { name: "Alon", color: "purple" },
  ];

  return (
    <div className="Mother">
      <h1>title</h1>
      <div className="box">
        <Child color={kids[0].color} name={kids[0].name} />
        <Child color={kids[1].color} name={kids[1].name} />
        <Child color={kids[2].color} name={kids[2].name} />
        <Child color={kids[3].color} name={kids[3].name} />
        <Child color={kids[4].color} name={kids[4].name} />
      </div>
    </div>
  );
}

export default Mother;
