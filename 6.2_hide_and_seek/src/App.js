import React, { useState } from "react";

function App() {
  const [isYellow, setColor] = useState(false);
  const clickHndler = () => {
    setColor(!isYellow);
  };

  return (
    <div className="outer">
      <button onClick={clickHndler}>show/hide</button>
      {isYellow ? <div className="inner"></div> : <></>}
    </div>
  );
}

export default App;
