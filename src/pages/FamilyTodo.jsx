import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import Navbar from "../components/Navbar";
import {
  getFamilyTodo,
  deleteFamilyTodo,
  handleCheckFamilyTodo,
} from "../api/api";
class FamilyTodo extends React.Component {
  state = {
    isLoading: true,
    todoList: [],
    error: "",
    checkBool: false,
  };
  componentDidMount() {
    getFamilyTodo()
      .then(({ data: { f_todo } }) => {
        this.setState({ todoList: f_todo, isLoading: false, error: "" });
      })
      .catch((err) => {
        this.setState("error when fetching data");
      });
  }

  handleDelete = (id) => {
    deleteFamilyTodo(id)
      .then((data) => {
        const result = this.state.todoList.filter((element) => {
          if (element.id !== id) {
            return element;
          }
        });
        this.setState({ todoList: result, isLoading: false, error: "" });
      })
      .catch((err) => {
        this.setState("error when delete data");
      });
  };
  hadnleCheckbox = (id, status) => {
    let bool = false;
    if (status === false) {
      bool = true;
    } else {
      bool = false;
    }
    handleCheckFamilyTodo(bool, id)
      .then(({ data }) => {
        console.log(data);
        if (data.result.f_status === true) {
          this.setState({ checkBool: true });
        } else {
          this.setState({ checkBool: false });
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <Navbar />
        <section className="todo">
          {this.state.todoList.map((element) => {
            return (
              <div className="todo--wrapper" key={element.id}>
                <div className="todo_1">
                  <div className="todo_1_input">
                    <input
                      type="checkbox"
                      defaultChecked={element.f_status ? true : false}
                      onClick={() => {
                        this.hadnleCheckbox(element.id, element.f_status);
                      }}
                    ></input>
                  </div>
                  <div className="todo_1_p">
                    <p
                      className={this.state.checkBool ? "checked" : "unchecked"}
                    >
                      {element.f_task}
                    </p>
                  </div>
                </div>
                <div className="todo_2">
                  <div className="todo_2_p">
                    <p>{element.f_day}</p>
                  </div>
                  <div className="todo_2_remove">
                    <button
                      className="btn todo-edit"
                      onClick={() => {
                        this.handleDelete(element.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="todo_2_update">
                    <Link to={`/todo/update/${element.id}`}>
                      <button className="btn todo-edit">Update</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </>
    );
  }
}

export default FamilyTodo;
