import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "../../assets/css/styleToDo.css";

const CardItem = (props) => {
  const { item } = props;
  const { data, setData } = props;
  const [openDetail, setOpenDetail] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [piority, setPiority] = useState("normal");

  useEffect(() => {
    setTitle(item.title);
    setDescription(item.description);
    setDate(item.date);
    setPiority(item.piority);
  }, [item]);

  const clickDetailButton = () => {
    setOpenDetail(!openDetail);
  };

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

  const clickUpdate = () => {
    const oldData = Object.assign([], data);
    const findData = oldData.find((el) => el.title === item.title);
    findData.title = title;
    findData.description = description;
    findData.date = date;
    findData.piority = piority;
    setData(oldData);
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <div className="card-root">
        <div>
          <input type="checkbox" />
        </div>
        <div className="card-title">{item.title}</div>
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
            value={title}
            onChange={changeTitle}
          />
          <div className="description">
            <div className="label">Description</div>
            <textarea
              className="textarea"
              rows="10"
              value={description}
              onChange={changeDescription}
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
              <div className="label" value={piority}>
                Piority
              </div>
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
          <div className="button-add" onClick={clickUpdate}>
            Update
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default CardItem;
