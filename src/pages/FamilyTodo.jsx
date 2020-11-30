import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import Navbar from "../components/Navbar";
import Checkbox from '@material-ui/core/Checkbox';

const FamilyTodo = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://be-memory.herokuapp.com/api/f_todo")
      .then(({ data: { f_todo } }) => {
        setTodoList(f_todo);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://be-memory.herokuapp.com/api/f_todo/${id}`)
      .then((data) => {
        console.log(data);

        const result = todoList.filter((element) => {
          if (element.id !== id) {
            return element;
          }
        });

        setTodoList(result);
        console.log("delete record");
      });
  };
  const hadnleCheckbox = (id, status) => {
    let bool = false;
    if (status === false) {
      bool = true;
    }else{bool=false}
    return axios
      .patch(`https://be-memory.herokuapp.com/api/f_todo/${id}`, {
        f_status: bool,
      })
      .then(({ data: { result } }) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="todo">
      <Navbar/>
      {todoList.map((element) => {
        return (
          <div className="todo-list" key={element.id}>
          <Checkbox     type="checkbox"
              defaultChecked={element.f_status ? true : false}
              onClick={() => {
                hadnleCheckbox(element.id, element.f_status);
              }}
             />
           
            {/* <input
              type="checkbox"
              defaultChecked={element.f_status ? true : false}
              onClick={() => {
                hadnleCheckbox(element.id, element.f_status);
              }}
            ></input> */}
            <h4>{element.f_task}</h4>
            <p>{element.f_day}</p>

            <button
              onClick={() => {
                handleDelete(element.id);
              }}
            >
              remove
            </button>
            <Link to={`/todo/update/${element.id}`}>
              <button>update</button>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default FamilyTodo;
