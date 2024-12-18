import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import ForgetPass from "./Auth/ForgetPass/ForgetPass";
import VerifyOtp from "./Auth/VerifyOtp/VerifyOtp";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import ProductListing from "./pages/product-listing/ProductListing";
import ErrorElement from "./pages/ErrorElement";
import Home from "./pages/Home";
import CustomerTestimonials from "./pages/CustomerTestimonials";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <h1>About</h1> },
        { path: "checkout", element: <Checkout /> },
        { path: "viewproducts", element: <ProductListing /> },
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
      <RouterProvider router={routes} />
    </>
  );
}
