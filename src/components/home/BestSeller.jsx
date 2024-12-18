import { useEffect, useState } from "react";
import Card from "../product-card/Card";
import { products } from "../../products.json";
const bestSellersData = products.slice(0, 8);

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const formattedData = bestSellersData.map((product) => ({
      id: product.productId,
      title: product.productTitle,
      description: product.productSubTitle,
      price: product.productPrice,
      discount: 5,
      image: product.productImage,
    }));

    setProducts(formattedData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">Our Bestseller</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSellersData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
