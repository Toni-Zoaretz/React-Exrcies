import React from "react";

export default function Test({ color, onClick }) {
  return (
    <button onClick={onClick} className={color + " btn"}>
      {color}
    </button>
  );
}
