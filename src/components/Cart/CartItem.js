import React, { useContext } from "react";

import ProductImage from "../../assets/images/shoe1.png";
import { CartContext } from "../../context/cart-context";

import "./CartItem.css";

const CartItem = ({ cartItem }) => {
  const { itemID, quantity, itemImages, itemPrice, itemTitle, itemDesc } =
    cartItem;
  const { removeFromCartHandler } = useContext(CartContext);

  function cartRemoveHandler() {
    removeFromCartHandler(itemID);
  }

  console.log(cartItem);
  return (
    <div className="CartItem">
      <div className="CartItem__ImageContainer">
        <img src={itemImages[0]} />
      </div>
      <div className="CartItem__Details">
        <h3>{itemTitle}</h3>
        <p>{itemDesc}</p>
        <h5>Rs. {itemPrice}/-</h5>
      </div>
      <div className="CartItem__DeleteIcon" onClick={cartRemoveHandler}>
        <i class="fa-regular fa-circle-xmark"></i>
      </div>
    </div>
  );
};

export default CartItem;
