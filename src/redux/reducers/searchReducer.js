const initialState = {
    allProducts: [], // The full list of products
    filteredProducts: [], // Products filtered by the search query
  };
  
  const productSearchReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_ALL_PRODUCTS":
        return {
          ...state,
          allProducts: action.payload,
          filteredProducts: action.payload, // Initially show all products
        };
      case "FILTER_PRODUCTS_BY_NAME":
        return {
          ...state,
          filteredProducts: state.allProducts.filter((product) =>
            product.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      default:
        return state;
    }
  };
  
  export default productSearchReducer;
  