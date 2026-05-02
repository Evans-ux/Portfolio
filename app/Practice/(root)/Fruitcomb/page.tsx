"use client"
import React from 'react'
import Image from 'next/image'
import { ArrowBigLeft, ArrowLeft } from 'lucide-react'
import { redirect } from 'next/navigation'

const page = () => {
  return (
    

    <div className="hero relative "> 
    <ArrowBigLeft onClick={()=>redirect("/")} className='ml-4 hover:text-red-500'/>
        <div className="  " style={{position: `absolute`,
            top: `10%`,
            left: `5%`,
            transform:`translate(-50, -50)`,
            color: `black`,
            textAlign: "left",
             
            
           
        }}>
             
            <p className='text-7xl'>
                Fruit combination <br/>
                for daily juice  </p> 
                <span className='flex flex-row justify-around mr-10 mt-7 mb-7'>
                    <Image src="/angelasmith.png" alt="samantha" height={70} width={70} />
                    <p className='mr-60  ml-4 mt-5 mb-5 font-bold text-2xl'>Samantha Williams</p>
                </span>
                <p style={{wordSpacing :"0.5rem"}}>
                Lorem ipsum dolor sit amet,<br/>
                consectetur adipiscing elit,sed<br/>
                 do eiusmod tempor incididunt ut <br/>
                 labore et dolore magna</p></div>
                <Image quality={75} width={1500} height={0} src="/fruitcomb.png" alt="hero picture"  className=" fill-background bg-cover"/> 
        </div>
        )
}

export default page