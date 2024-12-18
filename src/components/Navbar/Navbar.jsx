import { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";
import { Link } from "react-router-dom";
import MiniCart from "../MiniCart";
import { MegaMenu } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
import Mega from "./Mega";

export default function Navbar() {
  const [showNavList, setShowNavList] = useState(true);
  const [showMinicart, setShowMinicart] = useState(false);
  const [cartItems] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [token, setToken] = useState(true);
  const handellogout = () => {
    setToken(false);
  };

  const handelShowNavList = () => {
    setShowNavList(!showNavList);
  };

  const toggleMinicart = () => {
    setShowMinicart(!showMinicart);
  };

  const navlist = [
    { name: "Home", path: "/" },

    { name: "Shop", path: "/shop" },
    { name: "shop", path: "/viewproducts" },
    { name: "Our story", path: "/ourstory" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "Customer Reviews", path: "/customerreviews" },
  ];

  const cartItemCount = cartItems.length;

  return (
    <>
      <nav className="py-3">
        <div className="w-[90%] m-auto md:flex items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.svg" alt="logo" className="w-10 h-10" />
              <h1 className="text-2xl font-semibold">Kirst</h1>
            </div>
            <FaBars
              className="md:hidden cursor-pointer"
              onClick={handelShowNavList}
            />
          </div>

          {/* NAV LIST */}
          {showNavList && (
            <div className="md:flex items-center gap-4">

              {navlist.map((item, index) => (
                <ul key={index} className="relative">
                  <li>
                    {item.name === "Shop" ? (
                      <MegaMenu>
                        <MegaMenu.DropdownToggle>
                          Shop
                          <HiChevronDown className="ml-2" />
                        </MegaMenu.DropdownToggle>
                        <MegaMenu.Dropdown>
                          <Mega />
                        </MegaMenu.Dropdown>
                      </MegaMenu>
                    ) : (
                      <Link
                        to={item.path}
                        className="text-lg hover:text-gray-800"
                      >
                        {item.name}
                      </Link>
                    )}

                  </li>
                </ul>
              ))}
            </div>
          )}

          {/* ICONS */}
          {showNavList && (
            <div className="flex items-center gap-4 md:justify-between">
              {!showSearch ? (
                <CiSearch
                  className="cursor-pointer"
                  onClick={() => setShowSearch(true)}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Search..."
                  />
                  <button
                    onClick={() => setShowSearch(false)}
                    className="px-4 py-2 text-white bg-black rounded-lg "
                  >
                    Search
                  </button>
                </div>
              )}

              <Link to={""}>
                <CiHeart />
              </Link>
              <div className="relative">
                <FiInbox className="cursor-pointer" onClick={toggleMinicart} />
                <span className="absolute bottom-2 left-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cartItemCount > 0 ? cartItemCount : 0}
                </span>
                {showMinicart && (
                  <div className="absolute top-10 right-0 z-10">
                    <MiniCart cartItems={cartItems} />
                  </div>
                )}
              </div>

              {token ? (
                <button
                  className="bg-black text-white text-center py-2 px-4 rounded-lg"
                  onClick={handellogout}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="bg-black text-white text-center py-2 px-4 rounded-lg"
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
