import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { subscription } from "../api/subscription/subscription";

const FooterComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleSubscribe = async () => {
    if (!email) {
      setAlert({
        message: "Please enter a valid email address.",
        type: "error",
      });
      return;
    }

    try {
      const response = await subscription({ email });
      setAlert({
        message: "Subscription successful! Thank you!",
        type: "success",
      });
      setEmail("");
    } catch (error) {
      setAlert({
        message: "Subscription failed. Please try again.",
        type: "error",
      });
    }

    setTimeout(() => setAlert({ message: "", type: "" }), 3000);
  };

  return (
    <Footer container className="bg-black text-white relative z-50">
      <div className="w-full py-1 px-4">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-4">
          {/* Brand & Contact Section */}
          <div>
            <Footer.Brand
              href="/"
              src="/light-logo.svg"
              alt="Krist Logo"
              name={<span className="text-white">Krist</span>}
            />
            <ul className="mt-4 space-y-2 text-sm">
              <li>(704) 555-0127</li>
              <li>krist@example.com</li>
              <li>
                3891 Ranchview Dr. Richardson,
                <br /> California 62639
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <Footer.Title title="Information" className="text-white" />
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="hover:underline">
                  My Cart
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="hover:underline">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Section */}
          <div>
            <Footer.Title title="Service" className="text-white" />
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <Footer.Title title="Subscribe" className="text-white" />
            <p className="mt-2 text-sm">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-2 rounded-l-md text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-gray-700 px-4 rounded-r-md hover:bg-gray-600"
                onClick={handleSubscribe}
              >
                →
              </button>
            </div>
            {alert.message && (
              <div
                className={`mt-2 text-sm p-2 rounded ${
                  alert.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {alert.message}
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <Footer.Divider className="border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:space-y-0">
          {/* Payment Icons */}
          <div className="flex justify-center space-x-4">
            <FaCcVisa size={28} />
            <FaCcMastercard size={28} />
            <FaCcAmex size={28} />
            <FaCcPaypal size={28} />
          </div>

          <Footer.Copyright
            href="#"
            by="Krist"
            year={2023}
            className="text-sm"
          />

          <div className="flex space-x-6">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              onClick={() => navigate("")}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              onClick={() => navigate("")}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              onClick={() => navigate("")}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
