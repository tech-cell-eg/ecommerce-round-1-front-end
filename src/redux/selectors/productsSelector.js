export const selectAllProducts = (state) => state.fetchProducts.products;

export const selectFilteredProducts = (state) => state.fetchProducts.filteredProducts;

export const selectSearchQuery = (state) => state.fetchProducts.searchQuery;

export const selectProductsStatus = (state) => state.fetchProducts.status;

export const selectProductsError = (state) => state.fetchProducts.error;
