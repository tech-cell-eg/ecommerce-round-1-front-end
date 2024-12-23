import { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";
import { Link } from "react-router-dom";
import MiniCart from "./Minicart";
import Mega from "./Mega";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../../redux/selectors/cartSelectors";
import Drawer from "./Drawer";

export default function Navbar() {
  const [showNavList, setShowNavList] = useState(true);
  const [showMinicart, setShowMinicart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // const [searchText, setSearchText] = useState("");
  const cartItemCount = useSelector(selectCartItemCount);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showMegaMenu] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handellogout = () => {
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
              onClick={toggleDrawer}
            />
          </div>

          <Drawer
            isOpen={isDrawerOpen}
            toggleDrawer={toggleDrawer}
            navlist={navlist}
          />

          {showNavList && (
            <div className="hidden md:flex items-center gap-4 md:justify-between">
              <CiSearch
                className="cursor-pointer"
                onClick={() => setShowSearch(true)}
              />
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
