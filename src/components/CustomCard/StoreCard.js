import React from "react";

import "./store-card.css";

const StoreCard = ({ children, cardHeading, headerExtra, className }) => {
  return (
    <div className={`StoreCard ${className}`}>
      <div className="StoreCard__Header">
        <h2 className="StoreCard__Header-Heading">{cardHeading}</h2>
        <div className="StoreCard__Header-Extras">{headerExtra}</div>
      </div>
      {children}
    </div>
  );
};

export default StoreCard;
