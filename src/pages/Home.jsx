// import { useState, useEffect } from "react";
// import { fetchAllProducts } from "../api/products/products";
import BestSeller from "../components/home/BestSeller";
import CategorySlider from "../components/home/CategorySlider";
import Deals from "../components/home/Deals";
import InstgramStories from "../components/home/InstgramStories";

const Home = () => {
  //?Example of Fetching All Products
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const allProducts = await fetchAllProducts();
  //     console.log(allProducts);
  //     setProducts(allProducts);
  //   };

  //   getProducts();
  // }, []);

  return (
    <>
      {/* //?Example of Fetching All Products */}
      {/* <div>
        <h1>Products List</h1>
        <ul>
          {products?.map((prod) => (
            <li key={prod.id}>
              {" "}
              Product Name:
              {prod.name}
            </li>
          ))}
        </ul>
      </div> */}
      <CategorySlider />
      <BestSeller />
      <Deals
        initialDays={8}
        initialHours={0}
        initialMinutes={0}
        initialSeconds={0}
      />
      <InstgramStories />
    </>
  );
};

export default Home;
