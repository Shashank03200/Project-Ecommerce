import { createContext } from "react";
import React, { useState, useEffect } from "react";

import { getStorageData, setStorageData } from "../utils/localStorage";

const initialCartData = getStorageData("cartData");

export const CartContext = createContext({
  totalQuantity: initialCartData?.totalQuantity,
  cartAmount: initialCartData?.cartAmount,
  cartItems: initialCartData?.cartItems,
  addToCartHandler: function () {},
  removeFromCartHandler: function () {},
});

const CartContextProvider = ({ children }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (initialCartData) {
      setTotalQuantity(initialCartData.totalQuantity);
      setCartAmount(initialCartData.totalAmount);
      setCartItems(initialCartData.cartItems);
    }
  }, []);

  const addToCartHandler = (product, quantity) => {
    const { itemID, itemPrice } = product;

    const foundItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.itemID === itemID
    );

    const prevCartItems = [...cartItems];

    if (foundItemIndex === -1) {
      prevCartItems.push({ ...product, quantity });
    } else {
      const currentItem = { ...cartItems[foundItemIndex] };
      currentItem.quantity += quantity;
      prevCartItems.splice(foundItemIndex, 1, currentItem);
    }

    setCartItems(prevCartItems);
    setTotalQuantity((prevQty) => prevQty + quantity);
    setCartAmount((prev) => prev + quantity * itemPrice);
    setStorageData("cartData", {
      totalQuantity,
      cartAmount,
      cartItems: prevCartItems,
    });
  };

  const removeFromCartHandler = (itemID) => {
    const foundItem = cartItems.find((cartItem) => cartItem.itemID === itemID);

    console.log({ foundItem });

    let prevCartItems = [...cartItems];
    if (foundItem === null) {
      alert("Invalid Operation");
    } else {
      const qty = foundItem.quantity;
      const itemPrice = foundItem.itemPrice;
      prevCartItems = prevCartItems.filter(
        (cartItem) => cartItem.itemID !== itemID
      );

      setCartAmount((prev) => prev - qty * itemPrice);
      setTotalQuantity((prev) => prev - qty);
      setCartItems(prevCartItems);
      setStorageData("cartData", {
        totalQuantity,
        cartAmount,
        cartItems: prevCartItems,
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartAmount,
        cartItems,
        addToCartHandler,
        removeFromCartHandler,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
