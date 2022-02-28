import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import classes from "../../assets/css/styleToDo.module.css";

const CardItem = (props) => {
  const { item } = props;
  const { setData } = props;
  const { listRemove, setListRemove } = props;
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

  const clickRemoveButton = () => {
    setData((prevState) => prevState.filter((el) => el.id !== item.id));
    setListRemove((prevState) => prevState.filter((el) => el !== item.id));
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

  const dateInPast = function (firstDate, secondDate) {
    if (firstDate.setHours(0, 0, 0, 0) < secondDate.setHours(0, 0, 0, 0)) {
      return true;
    }
    return false;
  };

  const checkValidate = () => {
    if (title.length <= 0) {
      alert("Title is required");
      return false;
    } else if (dateInPast(new Date(date), new Date())) {
      alert("Invalid date");
      return false;
    }
    return true;
  };

  const clickUpdate = () => {
    if (checkValidate()) {
      setData((prevState) => {
        const oldData = Object.assign([], prevState);
        const findData = oldData.find((el) => el.id === item.id);
        findData.title = title;
        findData.description = description;
        findData.date = date;
        findData.piority = piority;
        return oldData;
      });
    }
  };

  const clickCheckbox = (e) => {
    if (e.target.checked) {
      setListRemove((prevState) => [...prevState, item.id]);
    } else {
      setListRemove((prevState) => prevState.filter((el) => el !== item.id));
    }
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <div className={classes.cardRoot}>
        <div>
          <input
            type="checkbox"
            value={item.id}
            checked={listRemove.includes(item.id)}
            onChange={clickCheckbox}
          />
        </div>
        <div className={classes.cardTitle}>{item.title}</div>
        <div style={{ flexGrow: 1 }}></div>
        <div className={classes.buttonDetail} onClick={clickDetailButton}>
          Detail
        </div>
        <div className={classes.buttonRemove} onClick={clickRemoveButton}>
          Remove
        </div>
      </div>
      {openDetail ? (
        <div className={classes.cardDetail}>
          <input
            type="text"
            className={classes.inputTitle}
            placeholder="Enter task name ..."
            value={title}
            onChange={changeTitle}
          />
          <div className={classes.description}>
            <div className={classes.label}>Description</div>
            <textarea
              className={classes.textarea}
              rows="10"
              value={description}
              onChange={changeDescription}
            ></textarea>
          </div>

          <div style={{ display: "flex", marginTop: 20 }}>
            <div style={{ width: "47%", marginRight: "6%" }}>
              <div className={classes.label}>Due Date</div>
              <input
                type="date"
                className={classes.dueDate}
                value={date}
                onChange={changeDate}
                min={format(new Date(), "yyyy-MM-dd")}
              />
            </div>
            <div style={{ width: "47%" }}>
              <div className={classes.label} value={piority}>
                Piority
              </div>
              <select
                className={classes.piority}
                value={piority}
                onChange={changePiority}
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className={classes.buttonAdd} onClick={clickUpdate}>
            Update
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default CardItem;
