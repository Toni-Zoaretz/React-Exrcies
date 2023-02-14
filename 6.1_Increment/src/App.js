import React, { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);

  const clickMes = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <button onClick={clickMes}>increment</button>
      <h2>{number}</h2>
    </div>
  );
}

export default App;
