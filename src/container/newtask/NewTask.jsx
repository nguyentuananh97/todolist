import React from "react";
import "../../assets/css/styleNewTask.css";

const NewTask = () => {
  return (
    <div className="newtask-root">
      <div className="newtask-header">New Task</div>
      <div className="newtask-content">
        <input
          type="text"
          className="input-title"
          placeholder="Add new task ..."
        />
        <div className="description">
          <div className="label">Description</div>
          <textarea className="textarea" rows="10"></textarea>
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <div style={{ width: "47%", marginRight: "6%" }}>
            <div className="label">Due Date</div>
            <input type="date" className="due-date" />
          </div>
          <div style={{ width: "47%" }}>
            <div className="label">Piority</div>
            <select name="cars" className="piority">
              <option value="volvo">Low</option>
              <option value="saab" selected>
                Normal
              </option>
              <option value="opel">High</option>
            </select>
          </div>
        </div>
      </div>
      <div className="newtask-footer">
        <div className="button-add">Add</div>
      </div>
    </div>
  );
};
export default NewTask;
