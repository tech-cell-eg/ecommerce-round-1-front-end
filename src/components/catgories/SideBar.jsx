import GenderCategory from "./GenderCategory";
import PriceCategory from "./PriceCategory";
import ColorCategory from "./ColorCategory";
import SizeCategory from "./SizeCategory";

function SideBar({ products }) {
  const filteredProducts = products;
  return (
    <div className=" bg-white p-4 border-r">
      {/* Product Categories */}
      <GenderCategory />
      {/* Filter by Price */}
      <PriceCategory />
      {/* Filter by Color */}
      <ColorCategory />
      {/* Filter by Size */}
      <SizeCategory />
    </div>
  );
}

export default SideBar;
