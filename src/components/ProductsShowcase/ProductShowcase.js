import React from "react";
import StoreCard from "../CustomCard/StoreCard";
import "./product-showcase.css";
import ProductList from "./ProductList";

const ShowcaseExtras = () => {
  return (
    <div className="StoreCard__ShowcaseExtras-ShowcaseTools">
      <span>
        <i class="fa-solid fa-magnifying-glass"></i>
      </span>
      <span className="StoreCard__ShowcaseExtras-CartIcon">
        <i class="fa-solid fa-calendar "></i>
      </span>
      <span className="StoreCard__ShowcaseExtras-FilterIcon">
        <i class="fa-solid fa-filter "></i>
      </span>
      <button className="StoreCard__ShowcaseExtras-SortButton">Sort By</button>
    </div>
  );
};

const ProductShowcase = () => {
  const [screen, setScreen] = React.useState("list");

  const handleScreenChange = (screen) => {
    setScreen(screen);
  };

  return (
    <StoreCard
      className={"ProductShowcase"}
      cardHeading={"Shoes"}
      headerExtra={<ShowcaseExtras />}
    >
      <ProductList />
    </StoreCard>
  );
};

export default ProductShowcase;
