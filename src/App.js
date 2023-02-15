import { useState } from "react";
import Test from "./Test";

function App() {
  const [selectedColor, setSelectedColor] = useState();
  const clickHandler = () => {
    // console.log(props.color);
  };
  const colors = ["red", "blue", "yellow", "green"];

  return (
    <div>
      {colors.map((color) => {
        return (
          <Test
            color={color}
            onClick={() => {
              setSelectedColor(color);
            }}
          />
        );
      })}
      <h1>the coloe is:{selectedColor}</h1>
    </div>
  );
}

export default App;
