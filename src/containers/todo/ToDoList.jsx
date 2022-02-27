import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "../../assets/css/styleToDo.css";

const ToDoList = (props) => {
  const { data, setData } = props;

  const [searchValue, setSearchValue] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const [listRemove, setListRemove] = useState([]);

  useEffect(() => {
    if (searchValue.length === 0) {
      const sortedActivities = data
        .slice()
        .sort((a, b) => new Date(a.date) - new Date(b.date));
      setDataSearch(sortedActivities);
    } else {
      const newData = data.filter((el) => el.title.includes(searchValue));
      const sortedActivities = newData
        .slice()
        .sort((a, b) => new Date(a.date) - new Date(b.date));
      setDataSearch(sortedActivities);
    }
  }, [searchValue, data]);

  const searchData = (e) => {
    setSearchValue(e.target.value);
  };

  const clickRemove = () => {
    const newData = data.filter((el) => !listRemove.includes(el.id));
    setData(newData);
    setListRemove([]);
  };

  return (
    <div className="todo-root">
      <div className="todo-main">
        <div className="todo-header">To Do List</div>
        <div className="todo-content">
          <input
            type="text"
            className="input-search"
            placeholder="Search ..."
            value={searchValue}
            onChange={searchData}
          />
          <div className="todo-item">
            {dataSearch.length > 0 ? (
              dataSearch.map((item, index) => (
                <CardItem
                  key={index}
                  item={item}
                  data={data}
                  setData={setData}
                  listRemove={listRemove}
                  setListRemove={setListRemove}
                />
              ))
            ) : (
              <div style={{ textAlign: "center", opacity: 0.5 }}>
                Don't have task
              </div>
            )}
          </div>
        </div>
      </div>
      {listRemove.length > 0 ? (
        <div className="todo-footer">
          <div>Bulk Action:</div>
          <div style={{ flexGrow: 1 }}></div>
          <div className="button-detail">Done</div>
          <div className="button-remove" onClick={clickRemove}>
            Remove
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ToDoList;
