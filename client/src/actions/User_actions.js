import axios from "axios";

import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "./Types";

// export const loginUser = (dataToSubmit) => (dispatch) => {
//   axios.post("http://localhost:5000/api/user/login", dataToSubmit).then((res) =>
//     dispatch({
//       type: LOGIN_USER,
//       payload: res.data,
//     })
//   );
// };

export function loginUser(dataToSubmit) {
  const request = axios
    .post("http://localhost:5000/api/user/login", dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post("http://localhost:5000/api/user/register", dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get("http://localhost:5000/api/user/logout")
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
