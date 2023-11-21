import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (name, price) => {
    setItems((prevState) => [...prevState, {name, price}])
  }

  return (
    <Context.Provider value={{items, addToCart}}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
