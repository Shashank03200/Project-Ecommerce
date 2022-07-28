import React, { useContext } from "react";
import StoreCard from "../CustomCard/StoreCard";

import "./Cart.css";
import CartItem from "./CartItem";

import { CartContext } from "../../context/cart-context";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log({ cartItems });
  return (
    <StoreCard
      cardHeading={"CART"}
      className="Cart"
      headerExtra={<i class="fa-solid fa-box"></i>}
    >
      <div className="StoreCard__Wrapper">
        <div className="Cart__ItemsWrapper">
          {cartItems.length === 0 ? (
            <div className="Cart__EmptyCart-Statement">
              What's stopping you, designer ?
            </div>
          ) : (
            cartItems.map((cartItem, id) => {
              return <CartItem key={id} cartItem={cartItem} />;
            })
          )}
        </div>

        <div className="Cart__Footer">
          <div className="Cart__Footer--Details">
            <div>
              <i class="fa-solid fa-calendar"></i>
              Home
            </div>
            <div>
              <i class="fa-solid fa-location-dot"></i>
              Select date
            </div>
          </div>
          <button className="Cart__OrderButton Button-Solid">Order Now</button>
        </div>
      </div>
    </StoreCard>
  );
};

export default Cart;
