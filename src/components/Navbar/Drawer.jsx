import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/actions/userActions";
import { clearCart } from "../../redux/cartSlice";
import { setActiveStep } from "../../redux/actions/checkoutActions";
import toast from "react-hot-toast";

const Drawer = ({ isOpen, toggleDrawer, navlist }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const cartItemCount = useSelector((state) => state.cart.items.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(localStorage.removeItem("token"));
    dispatch(setActiveStep(1));
    dispatch(clearCart());
    dispatch(signOut());
    navigate("/login");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleDrawer}
        />
      )}

      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg transform z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Krist</h2>
          <button
            onClick={toggleDrawer}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <IoMdClose className="text-2xl" />
          </button>
        </div>

        <ul className="flex flex-col p-4">
          <li className="py-2 border-b">
            {token ? (
              <Link
                to="/profile"
                onClick={toggleDrawer}
                className="text-lg hover:text-gray-800 block w-full"
              >
                Profile
              </Link>
            ) : (
              <button
                onClick={() => {
                  toast.error("Please Login First");
                  toggleDrawer();
                }}
                className="text-lg hover:text-gray-800 block w-full text-left"
              >
                Profile
              </button>
            )}
          </li>
          {navlist.map((item, index) => (
            <li key={index} className="py-2 border-b">
              <Link
                to={item.path}
                onClick={toggleDrawer}
                className="text-lg hover:text-gray-800 block w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="py-2 border-b">
            <Link
              to="/checkout"
              onClick={toggleDrawer}
              className="text-lg hover:text-gray-800 block w-full flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <FiShoppingCart /> Cart
              </span>
              {cartItemCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>

        <div className="absolute bottom-4 w-full px-4">
          {token ? (
            <button
              className="w-full bg-black text-white text-center py-2 px-4 rounded-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              className="w-full bg-black text-white text-center py-2 px-4 rounded-lg block"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  navlist: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Drawer;
