export const adminReducer = (state, action) => {
  switch (action.type) {
    case "ADMIN_ADD_USER":
      return [];
    case "ADD_PRODUCT":
      return {
        ...state,
        isSuccess: action.payload.success,
        payload: action.payload.Product,
      };
    case "ADD_COMPANY":
      return {
        ...state,
        isSuccess: action.payload.success,
        payload: action.payload.Product,
      };
    case "REMOVE_PRODUCT":
      return [];
    case "VIEW_TRANSACTIONS":
      return [];
    case "VIEW_ORDERS":
      return [];
    case "VIEW_USERS":
      return {
        ...state,
        isSuccess: action.payload.success,
        payload: action.payload.users,
      };
    default:
      return state;
  }
};
