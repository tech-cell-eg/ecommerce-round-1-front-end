import React from 'react'
import { FaPlus } from 'react-icons/fa'

export default function ManageAddress() {
  return <>
  <section>
    <button type="button" className='btn-primary px-8 w-fit flex items-center'><FaPlus className='inline-block mr-1' /> <span>Add New Address</span></button>
  </section>
  </>
}
