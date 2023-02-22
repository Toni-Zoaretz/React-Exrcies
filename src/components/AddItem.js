import React, { useEffect, useState } from "react";
import Item from "./Item";

function AddItem() {
  const [todo, setTodo] = useState("");
  const [todoList, setToDoList] = useState(() => {
    const savedTodo = localStorage.getItem("toList");
    if (savedTodo) {
      return JSON.parse(savedTodo);
    } else {
      return [];
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setToDoList([
        ...todoList,
        {
          id: todoList.length + 1,
          value: todo,
        },
      ]);
    }
    setTodo("");
  };

  useEffect(() => {
    localStorage.setItem("toList", JSON.stringify(todoList));
  }, [todoList]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDeleteItem = (id) => {
    console.log(id);
    const newToDo = todoList.filter((item) => item.id !== id);
    setToDoList(newToDo);
  };

  return (
    <div>
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="toDo">ADD TODO</label>
        <input type="text" onChange={handleInputChange} value={todo} />
        <button type="submit">ADD</button>
      </form>
      {todoList.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          todoInfo={item.value}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
}

export default AddItem;
