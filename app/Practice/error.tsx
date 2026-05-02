"use client"
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
import React from 'react'

const Errors = ({Errors}:{Errors:any}) => {
  return (
    <div className=' flex flex-col  items-center justify-center h-screen bg-gray-100 p-4 text-center'>
      <h1 className='text-2xl font-bold text-red-500 mb-4'>Error.</h1>
      <p className='text-lg text-gray-600 mb-8'>Somthing went wrong..{Errors}</p> 
      <div>
      <Button variant={"link"} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded'
      onClick={()=> window.location.reload()}> Try Again</Button>
      <Button variant={ "outline"}
      className='hover:bg-black hover:text-white hover:underline  ml-8'
      onClick={()=>redirect("/")}>Return Home</Button>
    </div>
    </div>
  )
}

export default Errors


