import React, { useState } from "react";
import axios from "axios";
const UpdataTodoFamily = (props) => {
  const [weekdays, setWeekdays] = useState("");

  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    //http://localhost:9090/api/image/
    // https://be-memory.herokuapp.com/api/f_todo
    e.preventDefault();
    return axios
      .patch(`https://be-memory.herokuapp.com/api/f_todo/${props.id}`, {
        f_day: weekdays,
        f_task: text,
        // f_status: "false",
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label id="weekdays">
          <select
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
        </label>
        <label id="text" name="text">
          <textarea
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default UpdataTodoFamily;
