import React from "react";
import products from "../../products.json";
import Card from "../product-card/Card";
function RelatedProducts() {
  return (
    <>
      <h2 className="text-2xl font-bold mt-8 mb-12">Related Products</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
        {products.products.splice(0, 4).map((product) => {
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
