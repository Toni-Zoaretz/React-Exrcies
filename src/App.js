import axios from "axios";
import "./index.css";

function App() {
  const getData = async () => {
    try {
      let respond = await axios
        .get
        // "https://63f67b2aab76703b15c00ab3.mockapi.io/api/v1/users"
        ();
      // console.log(respond);
      if (!respond.status === 200) throw Error("ERROR!");
      console.log(respond.data);
    } catch (error) {
      console.log("error");
    }
  };
  getData();
  return (
    <div>
      <h1>hey</h1>
    </div>
  );
}

export default App;
