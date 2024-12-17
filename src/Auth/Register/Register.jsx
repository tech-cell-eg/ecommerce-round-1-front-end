import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return <>
  <section className='grid grid-cols-12 gap-2 h-screen '>
    
    <div className='col-span-12 md:col-span-6 max-h-screen relative'>
        
        <img src='https://s3-alpha-sig.figma.com/img/2ac9/2eca/bfbbc6d8300995990bb423eb6b3c1ace?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T3CXyCC4BFsc80i8hwimXaPoPzlzgteoQ9AaEQYtoo0b-jFy1Da0O9x~-xzptNkBkLlLlZiM7-3-RadieUCPToCsioVPM44TffaCR6Xf4MyjyARsHtelZNxXnEvJdkX0GgHIjY~NqoSR7oY7JScplAJFBUPUyEPRrI5FxFeFse1S5-zzCo36LK6~quOzpHnAlF-muT5j8JbrCiUT9YnIy41MamOG7MtcwhouhX~SUTLKXqW4YBtESVoKZm-N49~IUNP3KWonyv8f5qA-anfFsEj5pmCoQosD1oHJmubg66ExZoLtmheFpPa3tfvy~cY7LFIpwFRH7E6o99u6csathw' 
        alt='' className='w-full h-full '/>
        <div className='flex items-center  absolute top-8 left-10 max-[280px]:left-6'>
       <img src='/logo.svg' alt='logo' className='w-8 h-8 max-[280px]:w-6   max-[280px]:h-6 ' />
       <h1 className='text-2xl max-[280px]:text-lg font-semibold'>Kirst</h1>
       </div>
    </div>
    <div className='col-span-12 md:col-span-5 py-6'>
    
        <form className='flex flex-col justify-center items-start space-y-4 w-[85%] m-auto h-full'>
        <div className='space-y-1'>
        <h2 className='text-2xl font-bold'>Create an new account</h2>
        <p className='text-gray-400 '>Please enter details</p>
    </div>

            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' className='rounded-lg border-2 border-gray-600 py-2 px-2' required/>
            </div>

            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='LastName'>Last Name</label>
                <input type='text' id='LastName' className='rounded-lg border-2 border-gray-600 py-2 px-2' required/>
            </div>

            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='email'>Email Address</label>
                <input type='email' id='email' className='rounded-lg border-2 border-gray-600 py-2 px-2' required/>
            </div>
            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='password'>password </label>
                <input type='password' id='password' className='rounded-lg border-2 border-gray-600 py-2 px-2' required/>
            </div>
    
  <div>
   <label htmlFor='checkbox' className='flex items-center space-x-2 '>   
    <input type="checkbox" id="" name="" value=""   className="appearance-none relative h-4 w-4 border border-gray-400 rounded bg-gray-200 checked:bg-black checked:text-white checked:before:content-['✓'] checked:before:absolute checked:before:text-sm checked:before:font-semibold  checked:before:text-white flex items-center justify-center " />
   <span className="">I agree to the <span className='font-bold'>Terms & Conditions</span></span>
   </label>
  </div>
     


            <div className='w-full  '>
                <button type='submit' className='bg-black text-white py-2 rounded-lg w-full '>Signup</button>
            </div>
        </form>
    </div>
  </section>
  </>
}
