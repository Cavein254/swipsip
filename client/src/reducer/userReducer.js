export const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isSuccess: action.payload.success,
        admin: action.payload.user.isAdmin,
        payload: action.payload.user,
      };
    case "REGISTER USER":
      return [];
    case "ADD_TO_CART":
      return [];
    case "REMOVE_FROM_CART":
      return [];
    default:
      return state;
  }
};
