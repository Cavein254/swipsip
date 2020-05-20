import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "../actions/Types";

const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
    default:
      return state;
  }
}
