import React, { useState } from "react";
import "../../assets/css/styleToDo.css";

const CardItem = () => {
  const [openDetail, setOpenDetail] = useState(false);

  const clickDetailButton = () => {
    setOpenDetail(!openDetail);
  };
  return (
    <div style={{ marginBottom: 30 }}>
      <div className="card-root">
        <div>
          <input type="checkbox" name="vehicle1" value="Bike" />
        </div>
        <div className="card-title">Do homework</div>
        <div style={{ flexGrow: 1 }}></div>
        <div className="button-detail" onClick={clickDetailButton}>
          Detail
        </div>
        <div className="button-remove">Remove</div>
      </div>
      {openDetail ? (
        <div className="card-detail">
          <input
            type="text"
            className="input-title"
            placeholder="Enter task name ..."
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
          <div className="button-add">Update</div>
        </div>
      ) : null}
    </div>
  );
};
export default CardItem;
