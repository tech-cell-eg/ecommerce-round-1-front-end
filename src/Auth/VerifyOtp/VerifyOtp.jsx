import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import VerifypassSucc from '../../Component/verifypassSucc/VerifypassSucc'

export default function VerifyOtp() {
  const [viewsuccess, setViewsuccess] = useState(false)


  const handleVerifysuccess = () => {
    setViewsuccess(true)
  }

  return <>
  <section className='grid grid-cols-12 gap-2 h-screen '>
    
    <div className='col-span-12 md:col-span-6 max-h-screen'>
        
        <img src='https://s3-alpha-sig.figma.com/img/17a9/80ed/1381b6c12a4843ef7f71eb0311fdbf2d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OAtumO9d6Cu7cv9va4AwBmMeDJqU3RJ2a-4qR8lfqA5Y7hrO6NjQupcGoB~bVgb8QBOnRgABbrC4M0dpluqPKRX68k-LXDF09sILVj3VJvf2ipNTIbpqTyYZYcw-pbbjpDjXgj9c6QIwLksLVvt~CTOJXd0PzMXsaH3vNawzeCaGFI8yrjg3GCKD9yDyZ1rVde0MwWVqJsgJYMb~gLWb2teZ-dbkKbsmlz-RE~KsAN2xIWNeWEvG5Jx2L4nHJ0zVlVaTJSgIUi0HydR5g3-rpRouyMxUMGh31UNhPox0sS1EX83oeCSY7fJ5M~7PA9QArkcbv~hR1ssx-OCvk4dJiA' alt='' className='w-full h-full '/>
    </div>

    <div className='col-span-12 md:col-span-5 py-6'>
    
        <form className='flex flex-col justify-center items-start space-y-4 w-[85%] m-auto h-full'>
        <div className='space-y-1'>
        <Link to={"/forgetpassword"} className='text-lg flex items-center ' ><IoIosArrowBack className='mr-2'/> Back</Link>
        <h2 className='text-2xl font-bold'>Enter OTP</h2>
        <p className='text-gray-400 text-lg max-[260px]:text-sm'>we have share a code of your register email address <br/><span>ayafarh@gmail.com</span></p>
    </div>
            <div className='flex items-center justify-between  w-[75%] '>
            <input
      type="text"
      maxLength="1"
      className="w-14 h-14 max-[370px]:h-10 max-[370px]:w-10  max-[260px]:h-8 max-[260px]:w-8 mr-2 text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black"
      required
    />
      <input
      type="text"
      maxLength="1"
      className="w-14 h-14 max-[370px]:h-10 max-[370px]:w-10  max-[260px]:h-8 max-[260px]:w-8 mr-2 text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black"
      required
    />
      <input
      type="text"
      maxLength="1"
      className="w-14 h-14 max-[370px]:h-10 max-[370px]:w-10 max-[260px]:h-8 max-[260px]:w-8 mr-2 text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black"
      required
    />
      <input
      type="text"
      maxLength="1"
      className="w-14 h-14 max-[370px]:h-10 max-[370px]:w-10 max-[260px]:h-8 max-[260px]:w-8 mr-2 text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black"
      required
    />
      <input
      type="text"
      maxLength="1"
      className="w-14 h-14 max-[370px]:h-10 max-[370px]:w-10 max-[260px]:h-8 max-[260px]:w-8  text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black"
      required
    />
            </div>

            <div className='w-full  '>
                <button type='submit' className='bg-black text-white py-2 rounded-lg w-full ' onClick={handleVerifysuccess}>verify</button>
               
                
            </div>
        </form>
    </div>
  </section>
    {viewsuccess && <VerifypassSucc />}
  </>
}
