import React, { useState } from "react";
import { navigate } from "@reach/router";
import Navbar from "../components/Navbar";
import { updateTodoFamily } from "../api/api";
const UpdataTodoFamily = (props) => {
  const [weekdays, setWeekdays] = useState("");

  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodoFamily(text, weekdays, props.id)
      .then((data) => {
        navigate("/todo");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <section>
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
            <button className="btn todo__update_btn">update</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdataTodoFamily;
