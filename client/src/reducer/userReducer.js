import { RegisterUserContext } from "../context/RegisterUserContext";

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem(
        "swipsip",
        JSON.stringify({
          isSuccess: action.payload.isSuccess,
          admin: action.payload.user.isAdmin,
          token: action.payload.user.token,
          id: action.payload.user._id,
        })
      );
      localStorage.setItem("isSuccess", JSON.stringify(action.payload.success));
      localStorage.setItem(
        "admin",
        JSON.stringify(action.payload.user.isAdmin)
      );
      localStorage.setItem("token", JSON.stringify(action.payload.user.token));
      return {
        ...state,
        isSuccess: action.payload.success,
        admin: action.payload.user.isAdmin,
        token: action.payload.user.token,
        user: action.payload.user,
        id: action.payload.user._id,
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
