import { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import MiniCart from "./Minicart";
import Mega from "./Mega";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../../redux/selectors/cartSelectors";
import Drawer from "./Drawer";

export default function Navbar() {
  const [showMinicart, setShowMinicart] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const cartItemCount = useSelector(selectCartItemCount);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    setToken(localStorage.removeItem("token"));
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleMinicart = () => {
    setShowMinicart(!showMinicart);
  };

  const navlist = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Our Story", path: "/ourstory" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Customer Reviews", path: "/customerreviews" },
  ];

  return (
    <nav className="py-3 relative">
      <div className="w-[90%] m-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-semibold">Kirst</h1>
        </div>

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
            <li
              key={index}
              className="relative"
              onMouseEnter={() => {
                if (item.name === "Shop") setShowMegaMenu(true);
              }}
              onMouseLeave={() => {
                if (item.name === "Shop") setShowMegaMenu(false);
              }}
            >
              {item.name === "Shop" ? (
                <button className="flex items-center text-lg hover:text-gray-800">
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
          <CiSearch className="cursor-pointer" />
          <Link to="">
            <CiHeart />
          </Link>
          <div className="relative">
            <FiInbox className="cursor-pointer" onClick={toggleMinicart} />
            <span className="absolute bottom-2 left-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {cartItemCount > 0 ? cartItemCount : 0}
            </span>
            {showMinicart && (
              <div className="absolute top-10 right-0 z-10">
                <MiniCart />
              </div>
            )}
          </div>
          {token ? (
            <button
              className="bg-black text-white py-2 px-4 rounded-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-black text-white py-2 px-4 rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mega Menu */}
      {showMegaMenu && (
        <div className="absolute left-40 right-0 top-full z-10">
          <Mega />
        </div>
      )}
    </nav>
  );
}
