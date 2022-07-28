import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

import "./product-card.css";

import { ProductContext } from "../../context/filter-context";

const firstExample = {
  size: 14,
  value: 4.3,
  edit: false,
};
const ProductCard = ({ id }) => {
  const { products } = useContext(ProductContext);
  const product = products[id];
  const { itemID, itemImages, itemPrice, itemTitle } = product;

  return (
    <Link to={`/store/shoes/${itemID}`} rel="noopener noreferrer">
      <div className="ProductCard">
        <div className="ProductCard__ProductImageWrapper">
          <img src={itemImages[0]} alt="shoe-1" />
        </div>
        <div className="ProductCard__ProductDetails">
          <h3 className="ProductCard__ProductDetails-title">{itemTitle}</h3>
          <h5 className="ProductCard__Price">Rs. {itemPrice}/-</h5>
          <div className="ProductCard__Rating">
            <ReactStars {...firstExample} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
