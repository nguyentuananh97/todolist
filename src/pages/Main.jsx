import React, { useState } from "react";
import NewTask from "../containers/newtask/NewTask";
import ToDoList from "../containers/todo/ToDoList";
import "../assets/css/styleMain.css";

const Main = () => {
  const [data, setData] = useState([]);
  return (
    <div className="main-root">
      <div className="left-container">
        <NewTask data={data} setData={setData} />
      </div>
      <div className="right-container">
        <ToDoList data={data} setData={setData} />
      </div>
    </div>
  );
};
export default Main;
