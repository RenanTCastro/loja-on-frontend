import React, { useContext, useState } from 'react';

const CartContextItems = React.createContext();

const useCartContext = () => {
  return useContext(CartContextItems);
}

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([])

    return (
        <CartContextItems.Provider value={{cartItems: cartItems, setCartItems: setCartItems}}>     
            {props.children}
        </CartContextItems.Provider>
    )
}

export { CartContextProvider };
export default useCartContext;
