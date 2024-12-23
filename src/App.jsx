import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import ForgetPass from "./Auth/ForgetPass/ForgetPass";
import VerifyOtp from "./Auth/VerifyOtp/VerifyOtp";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import ProductListing from "./pages/product-listing/ProductListing";
import ProductDetails from "./pages/product-details/ProductDetails";
import ErrorElement from "./pages/ErrorElement";
import Home from "./pages/Home";
import CustomerTestimonials from "./pages/CustomerTestimonials";
import { Toaster } from "react-hot-toast";
import ContactUs from "./pages/ContactUs/ContactUs";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <ProductListing /> },
        { path: "/product/:productId", element: <ProductDetails /> },
        { path: "about", element: <h1>About</h1> },
        { path: "checkout", element: <Checkout /> },
        { path: "contactUs", element: <ContactUs/> },
        { path: "customerreviews", element: <CustomerTestimonials /> },
      ],
      errorElement: <ErrorElement />,
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgetpassword", element: <ForgetPass /> },
    { path: "/verifyotp", element: <VerifyOtp /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
    <Toaster/>
    <RouterProvider router={routes} />
    </>
  );
}
