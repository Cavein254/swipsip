import { RegisterUserContext } from "../context/RegisterUserContext";

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem("isSuccess", JSON.stringify(action.payload.success));
      localStorage.setItem(
        "admin",
        JSON.stringify(action.payload.user.isAdmin)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isSuccess: action.payload.success,
        admin: action.payload.user.isAdmin,
        payload: action.payload.user,
      };
    case "REGISTER_USER":
      return {
        ...RegisterUserContext,
        isSuccess: action.payload.success,
        msg: action.payload.msg,
      };
    case "ADD_TO_CART":
      return [];
    case "REMOVE_FROM_CART":
      return [];
    default:
      return state;
  }
};
