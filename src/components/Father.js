import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import Son from "./Son";
function Father() {
  const { setGifts } = useGlobalContext();

  useEffect(() => {
    setGifts(["candy", "banana"]);
  }, [setGifts]);

  return (
    <div>
      Father
      <Son />
    </div>
  );
}

export default Father;
