import { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";
import { Link } from "react-router-dom";
import MiniCart from "./Minicart";
import { HiChevronDown } from "react-icons/hi";
import Mega from "./Mega";
import { useSelector } from "react-redux";
import {selectCartItemCount} from '../../redux/selectors/cartSelectors'

export default function Navbar() {
  const [showNavList, setShowNavList] = useState(true);
  const [showMinicart, setShowMinicart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const cartItemCount = useSelector(selectCartItemCount);


  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handellogout = () => {
        setToken(localStorage.removeItem("token"));
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
    { name: "Our story", path: "/ourstory" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "Customer Reviews", path: "/customerreviews" },
  ];

  return (
    <>
      <nav className="py-3 relative">
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
            <ul className="md:flex items-center max-[911px]:gap-2 max-[767px]:gap-4 gap-4">
              {navlist.map((item, index) => (
                <li key={index} className="relative">
                  {item.name === "Shop" ? (
                    <>
                      <button
                        className="flex items-center text-lg hover:text-gray-800"
                        onClick={() => setShowMegaMenu(!showMegaMenu)}
                      >
                        Shop
                        <HiChevronDown className="ml-2" />
                      </button>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-lg   hover:text-gray-800"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
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
                // <div className="flex items-center gap-2">
                //   <input
                //     type="text"
                //     value={searchText}
                //     onChange={(e) => setSearchText(e.target.value)}
                //     className="px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                //     placeholder="Search..."
                //   />
                //   <button
                //     onClick={() => setShowSearch(false)}
                //     className="px-4 py-2 text-white bg-black rounded-lg "
                //   >
                //     Search
                //   </button>
                // </div>
                <div>
                  <input
                    type="text"
                    // value={searchInput}
                    // onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search products..."
                    className="px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <div>
                    {filteredProducts.map((product) => (
                      <div key={product.id}>{product.name}</div>
                    ))}
                  </div>
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
                    <MiniCart />
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
        {/* Mega Menu */}
        {showMegaMenu && (
          <div className="absolute left-40 right-0 top-full z-10">
            <Mega />
          </div>
        )}
      </nav>
    </>
  );
}
