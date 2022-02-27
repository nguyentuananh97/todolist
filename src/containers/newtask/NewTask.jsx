import React, { useState } from "react";
import { format } from "date-fns";
import "../../assets/css/styleNewTask.css";

const NewTask = (props) => {
  const { data, setData } = props;
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [piority, setPiority] = useState("normal");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const changeDate = (e) => {
    setDate(e.target.value);
  };

  const changePiority = (e) => {
    setPiority(e.target.value);
  };

  const check = () => {
    if (title.length <= 0) {
      return false;
    }
    return true;
  };

  const clickAdd = () => {
    if (check()) {
      const newData = {
        id: id,
        title: title,
        description: description,
        date: date,
        piority: piority,
      };
      const oldData = Object.assign([], data);
      oldData.push(newData);
      setData(oldData);
      resetData();
      setId(id + 1);
    } else {
      alert("Title is required");
    }
  };

  const resetData = () => {
    setTitle("");
    setDescription("");
    setDate(format(new Date(), "yyyy-MM-dd"));
    setPiority("normal");
  };

  return (
    <div className="newtask-root">
      <div className="newtask-header">New Task</div>
      <div className="newtask-content">
        <input
          type="text"
          className="input-title"
          placeholder="Add new task ..."
          value={title}
          onChange={changeTitle}
        />
        <div className="description">
          <div className="label">Description</div>
          <textarea
            className="textarea"
            rows="10"
            onChange={changeDescription}
            value={description}
          ></textarea>
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <div style={{ width: "47%", marginRight: "6%" }}>
            <div className="label">Due Date</div>
            <input
              type="date"
              className="due-date"
              value={date}
              onChange={changeDate}
              min={format(new Date(), "yyyy-MM-dd")}
            />
          </div>
          <div style={{ width: "47%" }}>
            <div className="label">Piority</div>
            <select
              className="piority"
              value={piority}
              onChange={changePiority}
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      <div className="newtask-footer">
        <div className="button-add" onClick={clickAdd}>
          Add
        </div>
      </div>
    </div>
  );
};
export default NewTask;
