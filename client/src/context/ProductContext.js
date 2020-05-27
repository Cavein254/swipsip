import React, { createContext, useReducer } from "react";
import { addProductReducer } from "../reducer/Products_reducer";
import { Products } from "./DummyData";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, dispatch] = useReducer(addProductReducer, {products:Products });

  return (
    <ProductContext.Provider value={{products, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
