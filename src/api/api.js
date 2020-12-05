import axios from "axios";
const instance = axios.create({
  baseURL: `http://be-memory.herokuapp.com/api`,
});

export const getFamilyImage = (page) => {
  return axios.get(`http://be-memory.herokuapp.com/api/f_imgs?p=${page}`);
};
