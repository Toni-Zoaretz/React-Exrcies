import React, { useRef } from "react";
import img1 from "./assets/1111-modified.jpg";
import img2 from "./assets/2222-modified.jpg";
import img3 from "./assets/1111.jpg";
import img4 from "./assets/2222.jpg";
function App() {
  const imgRel1 = useRef(null);
  const imgRel2 = useRef(null);
  // console.log(imgRel);
  return (
    <div>
      <h1>hi bro!</h1>
      <img
        src={img1}
        alt="img"
        ref={imgRel1}
        onMouseOver={() => (imgRel1.current.src = img3)}
        onMouseLeave={() => (imgRel1.current.src = img1)}
      />
      <img
        src={img2}
        alt="img2"
        ref={imgRel2}
        onMouseOver={() => (imgRel2.current.src = img4)}
        onMouseLeave={() => (imgRel2.current.src = img2)}
      />
    </div>
  );
}

export default App;
