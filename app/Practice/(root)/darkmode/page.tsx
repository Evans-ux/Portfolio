import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'
 const [mode, setMode] = useState("#fffff");
const page = () => {
  return (
    <div>

        <Sun/> ?: <Moon />
    </div>
  )
}

export default page