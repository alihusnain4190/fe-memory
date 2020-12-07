import React, { useState } from "react";
import { navigate } from "@reach/router";
import Navbar from "../components/Navbar";
import { addTodoFamily } from "../api/api";
const AddTodoFamily = () => {
  const [weekdays, setWeekdays] = useState("");

  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoFamily(weekdays, text)
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
      <form onSubmit={handleSubmit} className="login">
        <div className="row">
          <div className="col-25">
            <label htmlFor="location">choose day</label>
          </div>
          <div className="col-75"></div>

          <select
            className="add-family-select-menu"
            id="weekdays"
            name="weekdays"
            required
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
        <div className="row">
          <div className="col-25">
            <label htmlFor="description">write your Task</label>
          </div>
          <div className="col-75">
            <textarea
              id="text"
              name="text"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button className="sign-up-login-btn center">Submit</button>
      </form>
    </>
  );
};

export default AddTodoFamily;
