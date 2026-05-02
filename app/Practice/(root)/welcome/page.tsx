"use client"
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import React, { use } from 'react'
import { toast } from 'sonner'

const page = () => {
const searchParams = useSearchParams()
const title = searchParams.get("title")

const searchProduct =(sortOrder:string)=>{
    const order = new URLSearchParams(searchParams.toString())
    console.log(order)
    const setOrder = order.set("sort", sortOrder)

    window.history.pushState(null, "", `?${order.get("asc")}`)
}
  return (
    <div>
 
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("Event has been created")}>
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Event has been created")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Be at the area 10 minutes before the event time")
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Event start time cannot be earlier than 8am")
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Event has not been created")}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Event" }), 2000)
              ),
            {
              loading: "Loading...",
              success: (data) => `${data.name} has been created`,
              error: "Error",
            }
          )
        }}
      >
        Promise
      </Button>
    </div>
  
   </div>
  )
}

export default page