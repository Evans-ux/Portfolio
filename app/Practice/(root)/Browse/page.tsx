import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <p className='font-bold text-6xl'>Latest</p>
        <span className='flex flex-row justify-between m-5'>
            <div>
                <Image src={"/latest1.png"} alt='' width={400} height={400}/>
                <div className='flex flex-col '>
                    <p className='mt-4'><span className='text-red-500'>Fruit</span><span className='ml-10 opacity-30'>5 mins read</span></p>
                    <p className='mt-4'style={{wordSpacing:"0.5rem"}}>Simple juice recipie to boost 
                        <br/>your immune system</p>
                </div>
            </div>

            <div>
                <Image src={"/latest2.png"} alt='' width={400} height={400}/>
                <div className='flex flex-col '>
                    <p className='mt-4'><span className='text-red-500'>Fruit</span><span className='ml-10 opacity-30'>5 mins read</span></p>
                    <p className='mt-4'style={{wordSpacing:"0.5rem"}}>Simple juice recipie to boost 
                        <br/>your immune system</p>
                </div>
            </div>

            <div>
                <Image src={"/latest3.png"} alt='' width={400} height={400}/>
                <div className='flex flex-col '>
                    <p className='mt-4'><span className='text-blue-500'>Fruit</span><span className='ml-10 opacity-30'>5 mins read</span></p>
                    <p className='mt-4'style={{wordSpacing:"0.5rem"}}>Simple juice recipie to boost 
                        <br/>your immune system</p>
                </div>
            </div>
        </span>
    </div>
  )
}

export default page