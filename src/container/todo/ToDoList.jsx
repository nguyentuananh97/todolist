import React from "react";
import CardItem from "./CardItem";
import "../../assets/css/styleToDo.css";

const ToDoList = () => {
  return (
    <div className="todo-root">
      <div className="todo-header">To Do List</div>
      <div className="todo-content">
        <input type="text" className="input-search" placeholder="Search ..." />
        <div className="todo-item">
          <CardItem />
          <CardItem /> <CardItem />
        </div>
      </div>
    </div>
  );
};
export default ToDoList;
