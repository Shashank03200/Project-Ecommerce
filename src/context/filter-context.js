import { createContext, useState } from "react";
import lodash from "lodash";
import { productList } from "../data/products";

export const ProductContext = createContext({
  products: [productList],
  filters: {
    costCheckInput: [],
    colorInput: [],
    templateCheckInput: [],
    typeCheckInput: [],
  },
  filterHandler: () => {},
});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productList);
  const [filters, setFilters] = useState({
    costCheckInput: [],
    colorInput: [],
    templateCheckInput: [],
    typeCheckInput: [],
  });

  const filterChangeHandler = (filterInput) => {
    let filterName = "";
    let filterValue = "";
    if (filterInput.target) {
      filterName = filterInput.target.name;
      filterValue = filterInput.target.value;
    } else {
      filterName = filterInput.key;
      filterValue = filterInput.value;
    }
    const currentFilterList = filters[filterName];

    let updatedList = [...currentFilterList];
    if (filterInput.target.checked === true) {
      updatedList.push(filterValue);
    } else if (filterInput.target.checked === false) {
      console.log(false);
      updatedList = currentFilterList.filter((item) => item !== filterValue);
    }

    setFilters((prevState) => {
      return {
        ...prevState,
        [filterName]: updatedList,
      };
    });
  };

  const filterApplyHandler = () => {
    //  filter by cost

    let filteredProducts = [...productList];

    const costFilters = filters.costCheckInput;
    const between1500And4000 = costFilters.includes("Rs. 1500-4000");
    const between4000And7000 = costFilters.includes("Rs. 4000-7000");
    const moreThan7000 = costFilters.includes("Rs. 7000+");
    console.log(products);

    let fp1 = [],
      fp2 = [],
      fp3 = [];
    if (costFilters.length > 0) {
      if (between1500And4000) {
        fp1 = productList.filter(
          (product) => product.itemPrice >= 1500 && product.itemPrice <= 4000
        );
      }
      if (between4000And7000) {
        fp2 = productList.filter(
          (product) => product.itemPrice >= 4000 && product.itemPrice <= 7000
        );
      }
      if (moreThan7000) {
        fp3 = productList.filter((product) => product.itemPrice > 7000);
      }
      filteredProducts = [...fp1, ...fp2, ...fp3];
    }

    // after filtering by price add other filters (INTERSERCTION)

    //  filter by design template
    const templateFilters = filters.templateCheckInput;
    if (templateFilters.length > 0) {
      const filteredProducts1 = filteredProducts.filter((product) =>
        templateFilters.includes(product.designTemplate)
      );
      let filteredProducts2 = [];
      if (templateFilters.includes("3+")) {
        filteredProducts2 = filteredProducts.filter(
          (product) => Number(product.designTemplate) > 3
        );
      }

      filteredProducts = [...filteredProducts1, ...filteredProducts2];
    }

    // type filter
    // color filter
    setProducts((prev) => filteredProducts);
  };

  return (
    <ProductContext.Provider
      value={{ products, filters, filterChangeHandler, filterApplyHandler }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
