import axios from "axios";
// import {useNavigate} from "react-router-dom";
// const navigate = useNavigate();

const domain = "http://localhost:5000";

const axiosGet = (url) => {
  return axios.get(domain + url);
};
const axiosPost = (url ,data) => {
  return axios.post(domain + url,data);
};
const axiosPut = (url,data) => {
  return axios.put(domain + url,data);
};

const checkWhichUserByEmail = (email) => {
  let endpoint = "";

  if (email.includes("@admin.")) {
    endpoint = "/admins";
  } else if (email.includes("@technician.")) {
    endpoint = "/technician";
  } else {
    endpoint = "/users";
  }
  return endpoint;
};


export {axiosGet ,axiosPost ,axiosPut,checkWhichUserByEmail};
