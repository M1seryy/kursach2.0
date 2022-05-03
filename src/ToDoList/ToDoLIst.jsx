import React, { useRef, useState } from "react";
import "./toDolist.css"

export const ToDoLIst = ({ todo, setTodo }) => {
  let task = useRef()
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  const deleteTodo = (id) => {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  };
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
 
  const statusTodo = (id) => {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  };
  
  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };
  console.log(todo);

  let saveTodo = (id) => {
    let newTodo = [...todo].map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  
  
  };
  return (
    <div>
      {todo.map((item) => (
        <div ref={task} style={{
          backgroundColor: `#${randomColor}`,
          
        }} className="tasks" key={todo.id}>
          {edit == item.id ? (
            <div>
              <input className="taskInput" onChange={(e) => setValue(e.target.value)} value={value} />
            </div>
          ) : (
            <div>{item.title}</div>
            
          )}
          {edit == item.id ? (
            <div>
              <button
              className="button1"
                onClick={() => {
                  saveTodo(item.id);
                }}
              >
                Соxpанить
              </button>
            </div>
          ) : (
            <div>
              <button className="button1" onClick={() => deleteTodo(item.id)}>Delete</button>
              <button className="button2" onClick={() => editTodo(item.id, item.title)}>
                Редактировать
              </button>
              <button className="button3" onClick={() => statusTodo(item.id)}>
                Закрыть/Открыть
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
