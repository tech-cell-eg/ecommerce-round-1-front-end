import React from 'react'
import { FaPenToSquare } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function ProfiInfo() {
  return <>
  <section>
   <div className='flex items-center justify-between relative'>
   <div className='h-14 w-14 rounded-full relative overflow-hidden'>
        <img src='/image.png' alt="" />
        
    </div>
    <div><Link to={'/edit-profile'}><FaPenToSquare className='inline-block text-white text-xl rounded bg-black p-1  absolute left-8 top-10 '/></Link></div>
    <div>
        <button type='submit' className='btn-primary w-fit flex items-center '><FaPenToSquare className='inline-block mr-1'/> <span>Update Profile</span></button>
    </div>
   </div>

   <form className='w-full  my-6  space-y-3'>
<div className='md:flex gap-4 w-full '>
<div className='flex flex-col  md:w-1/2 space-y-1'>
    <label htmlFor='First_Name'>First Name</label>
    <input type='text' id='First_Name' name='First_Name' className='form-control w-full' placeholder='First_Name'/>
</div>
<div className='flex flex-col  md:w-1/2 space-y-1'>
    <label htmlFor='Last_name'>Last Name</label>
    <input type='text' id='Last_name' name='Last_name' className='form-control w-full' placeholder='Last_name'/>
</div>
</div>


<div className='md:flex gap-4 w-full '>
<div className='flex flex-col  md:w-1/2 space-y-1'>
    <label htmlFor='phone'>Phone Number</label>
    <input type='phone' id='phone' name='phone' className='form-control w-full' placeholder='phone'/>
</div>
<div className='flex flex-col  md:w-1/2 space-y-1'>
    <label htmlFor='email'>Email Address</label>
    <input type='email' id='email' name='email' className='form-control w-full' placeholder='email'/>
</div>
</div>

<div className='flex flex-col space-y-1'>
    <label htmlFor='address'>Address</label>
    <input type='text' id='address' name='address' className='form-control w-full' placeholder='address'/>
</div>


   </form>
  </section>
  </>
}
