import { useState, useRef, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import MiniCart from "./Minicart";
import Mega from "./Mega";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/userActions";
import { clearCart } from "../../redux/cartSlice";
import { setActiveStep } from "../../redux/actions/checkoutActions";
import Drawer from "./Drawer";
import toast from "react-hot-toast";

export default function Navbar() {
  const [showMinicart, setShowMinicart] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const cartItemCount = useSelector((state) => state.cart.items.length);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const minicartRef = useRef(null);
  const megaMenuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMinicart = () => {
    setShowMinicart((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (minicartRef.current && !minicartRef.current.contains(event.target)) {
        setShowMinicart(false);
      }
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target) &&
        event.target.id !== "shop-button"
      ) {
        setShowMegaMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(setActiveStep(1));
    setToken(localStorage.removeItem("token"));
    dispatch(signOut());
    navigate("/login");
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleMegaMenues = () => {
    setShowMegaMenu(!showMegaMenu);
  };

  const closeMegaMenu = () => {
    setShowMegaMenu(false);
  };

  const navlist = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Our Story", path: "/#ourstory" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Customer Reviews", path: "/customerreviews" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="w-[90%] m-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-semibold">Kirst</h1>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <FaBars className="md:hidden cursor-pointer" onClick={toggleDrawer} />
        <Drawer
          isOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          navlist={navlist}
        />

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navlist.map((item, index) => (
            <li key={index} className="relative">
              {item.name === "Shop" ? (
                <button
                  className="flex items-center text-lg hover:text-gray-800"
                  onClick={toggleMegaMenues}
                  id="shop-button"
                >
                  {item.name}
                  <HiChevronDown className="ml-2" />
                </button>
              ) : (
                <Link to={item.path} className="text-lg hover:text-gray-800">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section: Icons & Authentication */}
        <div className="hidden md:flex items-center gap-4">
          {token ? (
            <Link to="/profile/wishlist">
              <CiHeart className="cursor-pointer text-2xl hover:text-red-500" />
            </Link>
          ) : (
            <button>
              <CiHeart
                className="cursor-pointer text-2xl"
                onClick={() => {
                  toast.error("Please Login First");
                }}
              />
            </button>
          )}

          {token ? (
            <Link to="/profile">
              <RxPerson className="cursor-pointer text-2xl" />
            </Link>
          ) : (
            <button>
              <RxPerson
                className="cursor-pointer text-2xl"
                onClick={() => {
                  toast.error("Please Login First");
                }}
              />
            </button>
          )}
          <div className="relative" ref={minicartRef}>
            <FiInbox
              className="cursor-pointer text-2xl hover:text-gray-700"
              onClick={toggleMinicart}
            />
            <span className="absolute bottom-2 left-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {cartItemCount}
            </span>
            {showMinicart && (
              <div className="absolute top-10 right-0 z-40">
                <MiniCart />
              </div>
            )}
          </div>
          {token ? (
            <button
              className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mega Menu */}
      {showMegaMenu && (
        <div
          ref={megaMenuRef}
          className={`absolute left-40 right-0 top-full z-50 ${
            showMegaMenu ? "block" : "hidden"
          }`}
        >
          <Mega closeMegaMenu={closeMegaMenu} />
        </div>
      )}
    </nav>
  );
}
