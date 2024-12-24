import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function SavedCard() {
  return <>
  <section>
    <button type="button" className='btn-primary px-8 w-fit flex items-center'><FaPlus className='inline-block mr-1' /> <span>Add New Card</span></button>

    <div className='flex gap-4 items-center justify-between my-6'>
      {/* image */}
      <div className='flex items-center justify-between ' >
      <div className='w-16 h-16'><img src='/image.png' alt='' className=''/></div>
      <div>
      <h2 className='font-bold text-lg'>card name</h2>
      <p>card number: **** **** **** 1234</p>
      </div>
       </div>
 {/* button */}
 <div>
  <button type="button" className='btn-primary px-8 w-fit flex my-4 bg-red-100 text-red-600 items-center'><RiDeleteBin6Line  className='inline-block mr-1'/> <span>Delete</span></button>
 </div>

    </div>
  </section>
  </>
}
