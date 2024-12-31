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
import OrderSteps from "./pages/OrderSteps"
import Profile from "./components/Profile/Profile";
import ProfiInfo from "./components/Profile/ProfiInfo";
import SavedCard from "./components/Profile/SavedCard";
import ManageAddress from "./components/Profile/ManageAddress";
import Notification from "./components/Profile/Notification";
import Setting from "./components/Profile/Setting";
import WishList from "./components/Profile/WishList";
import OrderList from './components/Profile/OrderList'
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import SpacialStory from "./components/OurStory/SpacialStory";


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
        { path: "order", element: <OrderSteps /> },
        { path: "contactUs", element: <ContactUs/> },
        {path:"spacialStory/:id",element: <SpacialStory/>},
        { path: "customerreviews", element: <CustomerTestimonials /> },
        {
          path: "profile",
          element: <Profile />,
          children: [
            {path:"",element:< ProfiInfo/>},
            { path: "PersonalInformation", element: < ProfiInfo/> },
            { path: "orders", element: <OrderList/> },
            { path: "wishlist", element: <WishList/> },
            { path: "savedCards", element: <SavedCard/> },
            { path: "notifications", element: <Notification/> },
            { path: "settings", element: <Setting/>},
            { path: "manageAdress", element: <ManageAddress/> },
          ],
          errorElement: <ErrorElement />,
        }
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
