import axios from "axios";

let baseURL = localStorage.getItem("baseURL") || "";

const setBaseURL = (url: string) => {
  baseURL = url;
  localStorage.setItem("baseURL", url);
};

const getBaseURL = () => {
  return baseURL;
};

const getTasks = async () => {
  const res = await axios.get(`${baseURL}/tasks`);
  return res.data;
};

const tgfs = {
  setBaseURL,
  getBaseURL,
  getTasks,
};

export default tgfs;
