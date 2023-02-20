import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [favoriteColor, setavoriteColor] = useState("blue");
  useEffect(() => {
    setTimeout(() => {
      setavoriteColor("red");
    }, 1000);
  });

  return (
    <div className="App">
      <h1>my favorite color is {favoriteColor} </h1>
    </div>
  );
}

export default App;
