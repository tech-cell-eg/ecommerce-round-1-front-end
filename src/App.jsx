
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout'
import Login from './Auth/Login/Login'
import Register from './Auth/Register/Register'
import ForgetPass from './Auth/ForgetPass/ForgetPass'
import VerifyOtp from './Auth/VerifyOtp/VerifyOtp'
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

export default function App() {
const routes = createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {path:"login",element:<Login/>},
    {path:"register",element:<Register/>},
    {path:"forgetpassword",element:<ForgetPass/>},
    {path:"verifyotp",element:<VerifyOtp/>},
    {path:"/about",element:<h1>About</h1>},
    { path: "/checkout", element: <Checkout /> },
    { path: "*", element: <NotFound /> },
  ]}
])


  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
