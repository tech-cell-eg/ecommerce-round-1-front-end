import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="minicart-dropdown bg-white p-4 rounded-lg shadow-lg w-80 text-black flex flex-col items-center">
      <img
        src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
        alt="Empty cart"
        className="w-24 h-24 mb-4"
      />
      <h3 className="text-xl">Your cart is empty</h3>
      <p className="text-gray-400 mt-2 mb-2">
        Add items to your cart to get started.
      </p>
      <button
        className="bg-black text-white py-2 rounded-lg w-full"
        onClick={() => navigate("shop")}
      >
        Browse Products
      </button>
    </div>
  );
};

export default EmptyCart;
