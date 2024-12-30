export const setAllProducts = (products) => ({
    type: "SET_ALL_PRODUCTS",
    payload: products,
  });
  
  export const filterProductsByName = (query) => ({
    type: "FILTER_PRODUCTS_BY_NAME",
    payload: query,
  });
  
