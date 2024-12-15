import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout'
import Login from './Auth/Login/Login'
import Register from './Auth/Register/Register'

export default function App() {
const routes = createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {path:"",element:<Login/>},
    {path:"register",element:<Register/>},
    {path:"/about",element:<h1>About</h1>},
  ]}
])


  return <>
  <RouterProvider router={routes} />
  </>
}
