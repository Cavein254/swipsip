import React, { useState, createContext } from "react";
import { Products } from "./DummyData";

export const ProductContext = createContext();
const ProductContextProvider = (props) => {
  const [product, setProduct] = useState([Products]);

  const addProduct = (id, type, name, price, inCart = false) => {
    setProduct([...product, { id, type, name, price, inCart }]);
  };

  const removeProduct = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };
  return (
    <ProductContext.Provider value={(product, addProduct, removeProduct)}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
