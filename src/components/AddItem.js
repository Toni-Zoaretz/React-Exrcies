import React from "react";

function AddItem() {
  return (
    <div className="container">
      <label htmlFor="toDo">ADD TODO</label>
      <input type="text" />
      <button>ADD</button>
    </div>
  );
}

export default AddItem;
