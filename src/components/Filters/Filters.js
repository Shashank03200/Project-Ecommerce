import React, { useContext } from "react";

import "./filters.css";

import {
  colorFilters,
  costFilters,
  designTemplates,
  productTypes,
} from "../../data/filters";
import StoreCard from "../CustomCard/StoreCard";

import { ProductContext } from "../../context/filter-context";

const CheckBoxInput = ({ id, value, name, checkInputHandler }) => {
  return (
    <div className="Filter__CheckBoxInput">
      <input
        type="checkbox"
        id={id}
        value={value || id}
        name={name}
        onChange={(e) => checkInputHandler(e)}
      ></input>
      <label htmlFor={id}>{value || id}</label>
    </div>
  );
};

const CostFilter = ({ filterChangeHandler }) => {
  return (
    <div className="Filters__Section">
      <h2 className="Filters__SectionHeading">Cost</h2>
      <div className="Filters__SectionInput">
        {costFilters.map((costFilter) => (
          <CheckBoxInput
            {...costFilter}
            name="costCheckInput"
            checkInputHandler={filterChangeHandler}
          />
        ))}
      </div>
    </div>
  );
};

const DesignFilter = ({ filterChangeHandler }) => {
  return (
    <div className="Filters__Section">
      <h2 className="Filters__SectionHeading">Design Templates</h2>
      <div className="Filters__SectionInput">
        {designTemplates.map((designTemplate) => (
          <CheckBoxInput
            {...designTemplate}
            name="templateCheckInput"
            checkInputHandler={filterChangeHandler}
          />
        ))}
      </div>
    </div>
  );
};

const ColorFilter = ({ colorSelectHandler }) => {
  return (
    <div className="Filters__Section">
      <h2 className="Filters__SectionHeading">Colour</h2>
      <div className="Filters__SectionInput ColorFilter">
        {colorFilters.map((colorFilter) => (
          <div
            className="Filters__ColorFilter-ColorItem"
            style={{
              backgroundColor: colorFilter,
              width: "30px",
              height: "30px",
            }}
            name="colorInput"
            onClick={() => colorSelectHandler(colorFilter)}
          ></div>
        ))}
      </div>
    </div>
  );
};

const TypeFilter = ({ filterChangeHandler }) => {
  return (
    <div className="Filters__Section">
      <h2 className="Filters__SectionHeading">Type</h2>
      <div className="Filters__SectionInput">
        {productTypes.map((productType) => (
          <CheckBoxInput
            {...productType}
            name="typeCheckInput"
            checkInputHandler={filterChangeHandler}
          />
        ))}
      </div>
    </div>
  );
};

const Filters = () => {
  const { filterChangeHandler, filterApplyHandler, filters } =
    useContext(ProductContext);

  const filterModifyHandler = (e) => {
    filterChangeHandler(e);
  };

  const colorSelectHandler = (color) => {
    console.log(color);
    // filterHandler({
    //   key: "colorInput",
    //   value: color,
    // });
  };

  return (
    <StoreCard
      cardHeading={"FILTERS"}
      headerExtra={
        <i class="fa-solid fa-filter" style={{ fontSize: "16px" }}></i>
      }
      className="Filters"
    >
      {/* Filter Section */}
      <CostFilter filterChangeHandler={filterModifyHandler} />
      <ColorFilter colorSelectHandler={colorSelectHandler} />
      <DesignFilter filterChangeHandler={filterModifyHandler} />
      <TypeFilter filterChangeHandler={filterModifyHandler} />
      <button className="Filters__ActionButton" onClick={filterApplyHandler}>
        Apply
      </button>
    </StoreCard>
  );
};

export default Filters;
