import React from "react";
import Card from "../product-card/Card";
import { fetchAllProducts } from "../../api/products/products";
import { useState, useEffect } from "react";
function RelatedProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts);
    };
    getProducts();
  }, []);
  return (
    <>
      <h2 className="text-2xl font-bold mt-8 mb-12">Related Products</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
        {products.splice(0, 4).map((product) => {
          return (
            <>
              <Card key={product.id} item={product} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default RelatedProducts;
