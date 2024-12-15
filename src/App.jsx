import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout'

export default function App() {
const routes = createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {path:"",element:<h1>Home</h1>},
    {path:"/about",element:<h1>About</h1>},
  ]}
])


  return <>
  <RouterProvider router={routes} />
  </>
}
