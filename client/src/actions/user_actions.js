import axios from "axios";

import { LOGIN_USER, REGISTER_USER } from "./type";

export function loginUser(userData) {
  const request = axios
    .post("/api/user/login", userData)
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(userData) {
  const request = axios
    .post("/api/user/register", userData)
    .then((res) => res.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}
