import React from "react";
import { BsCheckLg } from "react-icons/bs";
function Item({ todoInfo, handleDeleteItem, id }) {
  console.log(id);
  return (
    <div className="todoBox">
      <h2>
        <BsCheckLg />
      </h2>
      <h2>{todoInfo}</h2>
      <button onClick={() => handleDeleteItem(id)}>DELETE</button>
    </div>
  );
}

export default Item;
