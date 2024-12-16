import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function VerifypassSucc() {
    

  return <> 
  <section className='h-screen w-full bg-gray-200/90 fixed top-0 left-0 right-0 z-[999] '>



<div className='w-[60%] md:w-[40%] lg:w-[40%] xl:w-[30%] max-[490px]:w-[80%]   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-white p-8 space-y-2  text-center'>
<div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center'>
<div className='w-16 h-16 bg-[#1311181A] rounded-full flex items-center justify-center'>
<div className='w-12 h-12 bg-black rounded-full flex items-center justify-center'>
<div className='w-6 h-6 bg-white rounded-full flex items-center justify-center before:content-["✓"] text-xl font-bold '>

</div>
</div>
</div>
</div>
<h2 className='max-[490px]:text-sm max-[700px]:text-xl text-2xl font-bold'>Password changed successfully</h2>
<p className='text-gray-400 '>your password has been updated successfully</p>
<div className='w-full'><Link to={"/login"} className='bg-black text-white text-center py-2 rounded-lg w-full inline-block'>Back to login</Link></div>
</div>

  </section>
  </>
}
