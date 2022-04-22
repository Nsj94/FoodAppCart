import React, { useState } from "react";

const CartValueContext = React.createContext({});

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const values = {
    cart,
    setCart,
  };

  return (
    <CartValueContext.Provider value={values}>
      {children}
    </CartValueContext.Provider>
  );
}

export default ContextProvider;
export { CartValueContext };
