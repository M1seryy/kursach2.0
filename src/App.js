import "./App.css";
import React, { useRef, useState, useEffect } from "react";



import { Header } from "./Header/Header";
import { AddToDo } from "./AddToDo/AddToDo";
import { ToDoLIst } from "./ToDoList/ToDoLIst";

function App() {
  const [todo, setToDo] = useState([
    {
      id: 1,
      title: "first ToDo",
      status: true,
    },

    {
      id: 2,
      title: "second ToDo",
      status: true,
    },

    {
      id: 3,
      title: "third ToDo",
      status: false,
    },
  ]);
  return (
    <div className="App">
      <div className="block">
      <Header />
      <AddToDo todo={todo} setToDo={setToDo} />
      <ToDoLIst todo={todo} setTodo={setToDo} />
      </div>
     
    </div>
  );
}

export default App;
