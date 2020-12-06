import axios from "axios";
const instance = axios.create({
  baseURL: `https://be-memory.herokuapp.com/api`,
});

export const getFamilyImage = (page) => {
  return axios.get(`https://be-memory.herokuapp.com/api/f_imgs?p=${page}`);
};
export const addTodoFamily = (weekdays, text) => {
  return axios.post("https://be-memory.herokuapp.com/api/f_todo", {
    f_day: weekdays,
    f_task: text,
    f_status: "false",
  });
};
export const getFamilyTodo = () => {
  return axios.get("https://be-memory.herokuapp.com/api/f_todo");
};
export const deleteFamilyTodo = (id) => {
  return axios.delete(`https://be-memory.herokuapp.com/api/f_todo/${id}`);
};
export const handleCheckFamilyTodo = (bool, id) => {
  return axios.patch(`https://be-memory.herokuapp.com/api/f_todo/${id}`, {
    f_status: bool,
  });
};
export const updateTodoFamily = (weekdays, text,id) => {
  return axios.patch(`https://be-memory.herokuapp.com/api/f_todo/${id}`, {
    f_day: weekdays,
    f_task: text,
    // f_status: "false",
  });
};
