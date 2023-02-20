import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [box, setBox] = useState(true);
  const [box1, setBox1] = useState(true);
  const [box2, setBox2] = useState(true);

  const [klass, setKlass] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setKlass("box0");
    }, 1000);
    setTimeout(() => {
      setBox(false);
      setBox1(false);
      setBox2(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      <h2>hey bro!</h2>
      {box ? <div className={`box1 ${klass}`}></div> : null}
      {box1 ? <div className={`box2 ${klass}`}></div> : null}
      {box2 ? <div className={`box3 ${klass}`}></div> : null}
    </div>
  );
}

export default App;

// 1. We want to create a simple app: a box that slides onto the
// screen 1 sec after the page loads and then disappears
// from the DOM after 4 seconds.
// 2. We also want to be able to add 3 such boxes of different
// sizes.
// Here is an example
// Tip:
// - checkout CSS property animation, and keyframes
