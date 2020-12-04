import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Navbar from "../components/Navbar";
const AddTodoFamily = () => {
  const [weekdays, setWeekdays] = useState("");

  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    return axios
      .post("http://be-memory.herokuapp.com/api/f_todo", {
        f_day: weekdays,
        f_task: text,
        f_status: "false",
      })
      .then((data) => {
        console.log(data);
        navigate("/todo");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="todo--update">
        <div>
          <select
            className="todo__select"
            id="weekdays"
            name="weekdays"
            weekdays={weekdays}
            onChange={(e) => {
              e.preventDefault();
              setWeekdays(e.target.value);
            }}
          >
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </select>
        </div>
        <div>
          <textarea
            className="todo__textarea"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button className="btn  todo__update_btn">Submit</button>
        </div>
      </form>
    </>
  );
};

export default AddTodoFamily;
