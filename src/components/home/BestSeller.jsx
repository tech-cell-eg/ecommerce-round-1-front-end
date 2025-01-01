import { useEffect, useState } from "react";
import Card from "../product-card/Card";
import { fetchAllProducts } from "../../api/products/products";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const BestSeller = () => {
  const [products, setProducts] = useState([]);
  // const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts);
    };

    getProducts();
  }, []);

  // useEffect(() => {
  //   const getProduct = async () => {
  //     const onlyOneProduct = await fetchProductById(8);
  //     setProduct(onlyOneProduct);
  //   };

  //   getProduct();
  // }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">Our Bestseller</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
       
      </div>
      <div className="flex justify-end gap-4  my-4 mx-auto">
<button className="text-2xl p-2 rounded shadow-md border-2 border-gray-300"><IoIosArrowBack /></button>
<button className="text-2xl p-2 rounded shadow-md border-2 border-gray-300" ><IoIosArrowForward /></button>
</div>
    </div>
  );
};

export default BestSeller;
