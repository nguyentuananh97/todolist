import React from "react";
import NewTask from "../container/newtask/NewTask";
import ToDoList from "../container/todo/ToDoList";
import "../assets/css/styleMain.css";

const Main = () => {
  return (
    <div className="main-root">
      <div className="left-container">
        <NewTask />
      </div>
      <div className="right-container">
        <ToDoList />
      </div>
    </div>
  );
};
export default Main;
