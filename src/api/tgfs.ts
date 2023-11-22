import axios from "axios";

const cached = (name: string): [() => string, (newValue: any) => void] => {
  let value = localStorage.getItem(name) || "";

  const getter = () => {
    return value;
  };

  const setter = (newValue: any) => {
    value = newValue;
    localStorage.setItem(name, newValue);
  };

  return [getter, setter];
};

const [getBaseURL, setBaseURL] = cached("baseURL");
const [getUsername, setUsername] = cached("username");
const [getPassword, setPassword] = cached("password");

const getTasks = async () => {
  const res = await axios.get(`${getBaseURL()}/tasks`);
  return res.data;
};

const tgfs = {
  setBaseURL,
  getBaseURL,
  setUsername,
  getUsername,
  setPassword,
  getPassword,
  getTasks,
};

export default tgfs;
