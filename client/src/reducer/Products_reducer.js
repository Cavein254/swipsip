export const addProductReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          id: action.products.id,
          type: action.products.type,
          name: action.products.name,
          price: action.products.price,
          inCart: action.products.inCart,
        },
      ];
    case "REMOVE _PRODUCT":
      return state.filter((item) => item.id !== action.id);
    case "VIEW_PRODUCTS":
      return [...state];
    default:
      return state;
  }
};
