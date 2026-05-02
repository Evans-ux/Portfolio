import BlogPage from '@/components/_components/BlogPage'
import Load from '@/components/_components/load'
import React, { Suspense } from 'react'
import { preload } from 'react-dom'


const fetchSinglePost = async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      next:{revalidate:3600}
    })
    const data = await response.json()
    if (response.ok) return data
}



const page = async ({
    params,
}: {
    params: Promise<{ slug: number }>
}) => {
    const { slug } = await params
     
    const data = await fetchSinglePost(slug)
    
  

    return (
        <div className="min-h-screen">
          <Suspense  fallback={<Load /> }>
              <BlogPage data={data} />
          </Suspense>
        </div>
    )
}

export default page

 