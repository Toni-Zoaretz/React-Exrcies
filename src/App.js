import { useGlobalContext } from "./context/context";
import "./index.css";

function App() {
  const { style, handleClick } = useGlobalContext();

  return (
    <div className={style ? "blue" : "pink"}>
      <h1>HEY</h1>
      <button onClick={handleClick}>CLICK ME!</button>
    </div>
  );
}

export default App;
