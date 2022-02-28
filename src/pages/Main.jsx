import React, { useState } from "react";
import NewTask from "../containers/newtask/NewTask";
import ToDoList from "../containers/todo/ToDoList";
import classes from "../assets/css/styleMain.module.css";

const Main = () => {
  const [data, setData] = useState([]);
  return (
    <div className={classes.mainRoot}>
      <div className={classes.leftContainer}>
        <NewTask data={data} setData={setData} />
      </div>
      <div className={classes.rightContainer}>
        <ToDoList data={data} setData={setData} />
      </div>
    </div>
  );
};
export default Main;
