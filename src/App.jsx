import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout'
import Login from './Auth/Login/Login'
import Register from './Auth/Register/Register'
import ForgetPass from './Auth/ForgetPass/ForgetPass'
import VerifyOtp from './Auth/VerifyOtp/VerifyOtp'

export default function App() {
const routes = createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {path:"",element:<Login/>},
    {path:"register",element:<Register/>},
    {path:"forgetpassword",element:<ForgetPass/>},
    {path:"verifyotp",element:<VerifyOtp/>},
    {path:"/about",element:<h1>About</h1>},
  ]}
])


  return <>
  <RouterProvider router={routes} />
  </>
}
