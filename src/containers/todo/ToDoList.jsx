import React from "react";
import CardItem from "./CardItem";
import "../../assets/css/styleToDo.css";

const ToDoList = (props) => {
  const { data, setData } = props;
  return (
    <div className="todo-root">
      <div className="todo-header">To Do List</div>
      <div className="todo-content">
        <input type="text" className="input-search" placeholder="Search ..." />
        <div className="todo-item">
          {data.length > 0
            ? data.map((item, index) => (
                <CardItem
                  key={index}
                  item={item}
                  data={data}
                  setData={setData}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};
export default ToDoList;
