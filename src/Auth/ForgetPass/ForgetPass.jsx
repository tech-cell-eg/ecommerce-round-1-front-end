import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function ForgetPass() {
  return <>
  <section className='grid grid-cols-12 gap-2 h-screen '>
    
    <div className='col-span-12 md:col-span-6 max-h-screen'>
        
        <img src='https://s3-alpha-sig.figma.com/img/3818/95e7/243068f4aa1e91ad714c8fc6f108c2f4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g4tqa6W8Kn8SeqvljfvN-eyI7pp7ObBj3lHUDjpEKIyiXnVIgmI1nXXZPnRHJEiTmUIKDZRz~7LKHorq1IUbq1eRw7cQRceBuaEXPFxL80hPaecUm0bxgu1Gehl51hC6ugB8mbcFf05RXi6zTXCUlT-x5OG0ukZv21wzohOsTVu31aY~mWDIVt-Q2sOt2msOscvzyiDJNdx-sOFC-I6GIx2s645fo15atPycyrEPVjvMMrKWnhSb90nj2oR2EIuF9~KiMXxwkVT1LwdEisAWlVJdA~V2sFlrweHzL-o8syczAAHWUsrLXCXZ11AMz8EAzzP698yfZSojlvYS39~g0g' alt='' className='w-full h-full '/>
    </div>

    <div className='col-span-12 md:col-span-5 py-6'>
    
        <form className='flex flex-col justify-center items-start space-y-4 w-[85%] m-auto h-full'>
        <div className='space-y-1'>
        <Link to={"/"} className='text-lg flex items-center ' ><IoIosArrowBack className='mr-2'/> Back</Link>
        <h2 className='text-2xl font-bold'>Forgot Password</h2>
        <p className='text-gray-400 text-lg'>Enter your register email address. we will send you a code to reset your password</p>
    </div>
            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='email'>Email Address</label>
                <input type='email' id='email' className='rounded-lg border-2 border-gray-600 py-2 px-2' required/>
            </div>


            <div className='w-full  '>
                <button type='submit' className='bg-black text-white py-2 rounded-lg w-full '>Send OTP</button>
            </div>
        </form>
    </div>
  </section>
  
  </>
}
