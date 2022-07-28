import React, { useContext } from "react";
import ProductCard from "../CustomCard/ProductCard";

import { ProductContext } from "../../context/filter-context";

import "./product-showcase.css";

const ProductList = ({ handleScreen }) => {
  const { products } = useContext(ProductContext);

  console.log(products);
  return (
    <div className="ProductList">
      {products.map((product, id) => (
        <ProductCard key={id} id={id} handleScreen={handleScreen} />
      ))}
    </div>
  );
};

export default ProductList;
