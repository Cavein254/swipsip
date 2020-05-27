import React, { useState, createContext } from "react";
import { Products } from "./DummyData";

export const ProductContext = createContext();
const ProductContextProvider = (props) => {
  const [products, setProduct] = useState({ products: Products });

  const addProduct = (id, type, name, price, inCart = false) => {
    setProduct([...products, { id, type, name, price, inCart }]);
  };

  const removeProduct = (id) => {
    setProduct(products.filter((item) => item.id !== id));
  };
  return (
    <ProductContext.Provider value={{products, addProduct, removeProduct}}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
