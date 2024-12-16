import React from "react";
import Card from "../../components/product-card/Card";
import png from "../../assets/card.png";

function ProductListing() {
    const items = [
        {
          id: 1,
          title: "Shoes",
          description: "This is a shoes",
          price: 100,
          image: png,
          discount: 10,
        },
        {
          id: 2,
          title: "t-shirt",
          description: "polo t-shirt",
          price: 100,
          image: png,
          discount: 20,
        },
        {
          id: 3,
          title: "watch",
          description: "This is a watch",
          price: 100,
          image: png,
          discount: 0,
        },
        {
          id: 4,
          title: "bag",
          description: "This is a bag",
          price: 100,
          image: png,
          discount: 50,
        },
      ];
  return (
    <>
      {/* <div className="mb-10">ProductListing</div> */}
      <div className="grid grid-cols-4 w-[90%] mx-auto gap-10">
        {items.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default ProductListing;
