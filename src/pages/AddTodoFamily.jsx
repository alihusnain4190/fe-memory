import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
const AddTodoFamily = () => {
  const [f_day, setDay] = useState("");
  const [f_task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    return (
      axios
        .post("http://be-memory.herokuapp.com/api/f_todo", {
          f_task: f_day,
          f_day: f_task,
          f_status: "false",
        })
        .then((data) => {
          console.log(data);
          navigate("/todo");
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <label id="day">
        Enter day
        <input
          id="day"
          name="day"
          value={f_day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        ></input>
      </label>
      <label id="task" name="task">
        <textarea
          id="task"
          name="task"
          value={f_task}
          onChange={(e) => setTask(e.target.value)}
        ></textarea>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default AddTodoFamily;
