
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout'
import Login from './Auth/Login/Login'
import Register from './Auth/Register/Register'
import ForgetPass from './Auth/ForgetPass/ForgetPass'
import Checkout from "./pages/Checkout";


export default function App() {
const routes = createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {path:"",element:<Login/>},
    {path:"register",element:<Register/>},
    {path:"forgetpassword",element:<ForgetPass/>},
    {path:"/about",element:<h1>About</h1>},
    { path: "/checkout", element: <Checkout /> },
  ]}
])


  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
