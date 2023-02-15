import React, { useState } from "react";

function App() {
  function color() {
    if (counter === 0) {
      return "black";
    }
    if (counter < 0) {
      return "red";
    }
    if (counter > 0) {
      return "green";
    }
  }
  const [counter, setCounter] = useState(0);

  const incHandler = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };
  const decHandler = () => {
    if (counter > -10) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <button onClick={incHandler}>+</button>
      <button onClick={decHandler}>-</button>
      <div className={color()}>
        <span>{counter}</span>
      </div>
    </div>
  );
}

export default App;
// We want to create two buttons and one label.
// The first button will increment the counter.
// The second button will decrement the counter
// A label that displays the current value.
// The counter range can only be from -10 to 10.
// If the counter is negative the label will be a red color.
// If the counter is positive the label will be a green color.
// If the counter is 0 the label will be black in color.
