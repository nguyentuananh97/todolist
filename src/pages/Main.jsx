import React, { useEffect, useState } from "react";
import NewTask from "../containers/newtask/NewTask";
import ToDoList from "../containers/todo/ToDoList";
import classes from "../assets/css/Main.module.css";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const myStorage = localStorage.getItem("data");
    if (myStorage === null) {
      localStorage.setItem("data", "[]");
    } else {
      const newData = JSON.parse(myStorage);
      setData(newData);
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes["container-left"]}>
        <NewTask data={data} setData={setData} />
      </div>
      <div className={classes["container-right"]}>
        <ToDoList data={data} setData={setData} />
      </div>
    </div>
  );
};
export default Main;
