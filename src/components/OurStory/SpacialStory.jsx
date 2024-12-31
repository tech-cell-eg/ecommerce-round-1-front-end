import React, { useEffect, useState } from 'react'
import getspicialstory from '../../api/ourstories/spacialStory'
import { useParams } from 'react-router-dom'

export default function SpacialStory() {
    const[story,setstory]=useState([])
    let {id} = useParams()

    useEffect(() => {
        getspicialstory(id)
        .then(data=>setstory(data))
    },[])

  return <>
  <section   className="container-main min-h-screen ">
   <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
   <div>
        <img src={story.image} alt='' className='w-full h-full'/>
     </div>
     <div className='flex flex-col items-start justify-center space-y-2'>
        <h2 className='text-xl font-bold'>{story.title}</h2>
        <p className='text-gray-400'>{story.description}</p>
     </div>
   </div>
  </section>
  
  </>
}
