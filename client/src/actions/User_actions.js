import axios from "axios";

import { LOGIN_USER } from "./Types";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("http://localhost:5000/api/user/login", dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
