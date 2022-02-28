import React, { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import classes from "../../assets/css/NewTask.module.css";

const NewTask = (props) => {
  const { setData } = props;
  const idRef = useRef(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [piority, setPiority] = useState("normal");

  useEffect(() => {
    const myStorage = JSON.parse(localStorage.getItem("data"));
    if (myStorage !== null && myStorage.length > 0) {
      const ids = myStorage.map((object) => {
        return object.id;
      });
      const maxId = Math.max(...ids);
      idRef.current = maxId + 1;
    }
  }, []);

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

  const clickAdd = () => {
    if (checkValidate()) {
      const newData = {
        id: idRef.current,
        title: title,
        description: description,
        date: date,
        piority: piority,
      };
      const myStorage = JSON.parse(localStorage.getItem("data"));
      myStorage.push(newData);
      localStorage.setItem("data", JSON.stringify(myStorage));
      setData((prevState) => [...prevState, newData]);
      resetData();
      idRef.current += 1;
    }
  };

  const resetData = () => {
    setTitle("");
    setDescription("");
    setDate(format(new Date(), "yyyy-MM-dd"));
    setPiority("normal");
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>New Task</div>
      <div className={classes.content}>
        <input
          type="text"
          className={classes["input-title"]}
          placeholder="Add new task ..."
          value={title}
          onChange={changeTitle}
        />
        <div className={classes.description}>
          <div className={classes.label}>Description</div>
          <textarea
            className={classes.textarea}
            rows="10"
            onChange={changeDescription}
            value={description}
          ></textarea>
        </div>
        <div className={classes.datePiority}>
          <div className={classes["box-date"]}>
            <div className={classes.label}>Due Date</div>
            <input
              type="date"
              className={classes.dueDate}
              value={date}
              onChange={changeDate}
              min={format(new Date(), "yyyy-MM-dd")}
            />
          </div>
          <div className={classes["box-piority"]}>
            <div className={classes.label}>Piority</div>
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
      </div>
      <div className={classes.footer}>
        <div className={classes["button-add"]} onClick={clickAdd}>
          Add
        </div>
      </div>
    </div>
  );
};
export default NewTask;
