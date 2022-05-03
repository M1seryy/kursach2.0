import React, { useState } from "react";
import uuid from "uuid";
import "./addTodo.css";
export const AddToDo = ({ todo, setToDo }) => {
  const [value, setValue] = useState("");
  console.log(value);
  const saveTodo = () => {
    setToDo([
      ...todo,
      {
        id: 5,
        title: value,
        status: true,
      },
    ]);
    setValue("");
  };
  return (
    <div className="addDiv">
      <input
        className="inputAdd"
        placeholder="Введите задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button className="add" onClick={saveTodo}>
        Сохранить
      </button>
    </div>
  );
};
