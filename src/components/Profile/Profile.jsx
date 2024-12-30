import React from 'react'
import Sidbar from './Sidbar'
import { Outlet } from 'react-router-dom'

export default function Profile() {
  return<>
 <section className="container-main py-6  bg-white">
  <h2 className="text-2xl font-semibold">My Profile</h2>

  <div className="grid grid-cols-12 gap-2 mt-6">
    <div className="min-[928px]:col-span-3 max-[982px]:col-span-4  max-[694px]:col-span-12">
      <Sidbar />
    </div>
    <div className="min-[928px]:col-span-9  max-[982px]:col-span-8 p-4 max-[694px]:col-span-12">
      <Outlet />
    </div>
  </div>
</section>
  </>
}
