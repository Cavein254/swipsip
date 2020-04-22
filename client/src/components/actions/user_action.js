import axios from "axios";

import { LOGIN_USER } from "./type";

export function loginUser(dataToSubmit) {
  const req = axios
    .post("/api/user/login", dataToSubmit)
    .then((res) => res.data);
  return {
    type: LOGIN_USER,
    payload: req,
  };
}
