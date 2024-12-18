import { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";
import { Link } from "react-router-dom";
import MiniCart from "../MiniCart";

export default function Navbar() {
  const [showNavList, setShowNavList] = useState(true);
  const [showMinicart, setShowMinicart] = useState(false);
  const [cartItems] = useState([]);

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
            <div className="md:flex items-center justify-start gap-4 ">
              {navlist.map((item, index) => (
                <ul key={index}>
                  <li>
                    <Link
                      to={item.path}
                      className="text-lg  hover:text-gray-800"
                    >
                      {item.name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          )}

          {/* ICONS */}
          {showNavList && (
            <div className="flex items-center gap-4  md:justify-between">
              <CiSearch className="cursor-pointer" />
              <Link to={""}>
                <CiHeart className="" />
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
