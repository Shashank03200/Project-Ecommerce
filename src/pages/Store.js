import React from "react";
import ProductShowcase from "../components/ProductsShowcase/ProductShowcase";

import FilterContextProvider from "../context/filter-context";
import Filters from "../components/Filters/Filters";
import Cart from "../components/Cart/Cart";

import "./Store.css";

const Store = () => {
  return (
    <div className="Store">
      <FilterContextProvider>
        <Filters />
        <ProductShowcase />
      </FilterContextProvider>
      <Cart />
    </div>
  );
};

export default Store;
