import React, { useState } from 'react'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { FaBars } from 'react-icons/fa'
import { FiInbox } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [ showNavList, setShowNavList] = useState(true)
const handelShowNavList = () => {
    setShowNavList(!showNavList)
}

    const navlist=[
        { name: 'Home',
          path: '/',
        },
        { name: 'shop',
            path: '/shop',
        },
        { name: 'Our story',
            path: '/ourstory', },
        { name: 'Blogs',
            path: '/blogs',
        },
        { name: 'Contact',
            path: '/contact',
        },
       
    ]



  return <>
  <nav className='py-3'>
    <div className='w-[90%] m-auto md:flex items-center justify-between'>
    <div className='flex items-center justify-between'>
       <div className='flex items-center'>
       <img src='/logo.svg' alt='logo' className='w-10 h-10' />
       <h1 className='text-2xl font-semibold'>Kirst</h1>
       </div>
       <FaBars className='md:hidden cursor-pointer' onClick={handelShowNavList}/>
    </div>
   


    {/* NAV LIST */}
     
   {showNavList && (
     <div className='md:flex items-center justify-start gap-4 '>
     {
         navlist.map((item,index)=>
                 <ul>
                     <li key={index}>
                         <Link to={item.path} className='text-lg  hover:text-gray-800'>{item.name}</Link>
                     </li>
                 </ul>
         )
         }
     </div>
     
     
   )}

   {/* ICONS */}
   {showNavList && (<div className='flex items-center gap-4  md:justify-between'>
     <CiSearch className='cursor-pointer'/>
     <Link to={""} ><CiHeart className=''/></Link>
     <FiInbox/>

     <Link to={"/login"} className='bg-black text-white text-center py-2 px-4 rounded-lg'>Login</Link>
     </div>)}


</div>
  </nav>
  
  </>
}

