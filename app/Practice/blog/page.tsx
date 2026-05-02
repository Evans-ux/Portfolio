 
import Blog from '@/components/_components/blog'
import Load from '@/components/_components/load'
import React, { Suspense } from 'react'
 


         const fetchData = async () => {
             
             const response = await fetch("https://jsonplaceholder.typicode.com/posts" )
             let data = await response.json()
              
             if (response.ok) return data
         
            
         }
     

 function page() {
    const data =  fetchData()

console.log(data)
 
  return (
  
    <div>
   <p className='text-5xl text-amber-50 flex justify-center p-5 m-5 bg-black'>Blog Main Page</p>
  <Suspense fallback={ <Load />}>
      {<Blog data={data} />}
  </Suspense>
     
    </div>
  
  
  
  )
}

export default page



//for prefetching on hover

/*'use client'
 
import Link from 'next/link'
import { useState } from 'react'
 
function HoverPrefetchLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const [active, setActive] = useState(false)
 
  return (
    <Link
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
    >
      {children}
    </Link>
  )
}*/