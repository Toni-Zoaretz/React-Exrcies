import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";

function Item({ todoInfo, handleDeleteItem, id }) {
  const [activeIcon, setActiveIcon] = useState(false);

  console.log(id);
  return (
    <div className="todoBox">
      <h2>
        {" "}
        {activeIcon ? (
          <BsCheckLg
            onClick={() => {
              setActiveIcon(!activeIcon);
            }}
          />
        ) : (
          <AiFillCloseSquare
            onClick={() => {
              setActiveIcon(!activeIcon);
            }}
          />
        )}
      </h2>
      <h2>{todoInfo}</h2>
      <button onClick={() => handleDeleteItem(id)}>DELETE</button>
    </div>
  );
}

export default Item;
