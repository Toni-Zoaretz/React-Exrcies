import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const colors = ["box1", "box2", "box3", "box4", "box5"];
    setTimeout(() => {
      setColor(colors[index]);
      setIndex(index + 1);
      if (index === 5) {
        setIndex(0);
      }
    }, 500);
  }, [color, index]);
  return <div className={`box ${color}`}></div>;
}

export default App;

// 1. We want to create a simple app: a box that changes color
// every half a second.
// 2. Let’s change the box to a circle after 5 color changes
