 
'use client'
 import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
  <div className='m-4'>

       <p className='text-5xl font-bold'>Trending</p>
     <div className='flex flex-row justify-between mt-20'>  
       <span className='flex flex-row '>
           <Image src="/trendOrange.png"  alt="Orange" quality={75} width={150} height={150} />
           <div className='flex flex-col ml-5'>
            <p className='font-bold mb-3'>Friut juice to boost <br/>your immune</p>
            <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
           </div>
       </span>

       <span className='flex flex-row '>
            <Image src="/trendAvacado.png"  alt="Avacado" quality={75} width={150} height={150} />
            <div className='flex flex-col ml-5'>
            <p className='font-bold mb-3'>Friut juice to boost <br/>your immune</p>
            <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit</p>
           </div>
       </span>

       <span className='flex flex-row '>
            <Image src="/trendStraw.png"  alt="Strawberries" quality={75} width={150} height={150} />
            <div className='flex flex-col ml-5'>
            <p className='font-bold mb-3'>Friut juice to boost <br/>your immune</p>
            <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
           </div>
       </span>
     </div>
  </div>
  )
}

export default page



/*import { useSearchParams } from 'next/navigation'
 
export default function SortProducts() {
  const searchParams = useSearchParams()
 
  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }
 
  return (
     <>
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </>
  )
}*/