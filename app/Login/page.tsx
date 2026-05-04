import { LoginUser } from '@/components/_components/actions/LoginAction'
import LikesComponent from '@/components/_components/LikesComponent'
import { LoginComponent } from '@/components/_components/LoginComponent'
import React from 'react'

const page = () => {
  return (
    <div> <LoginComponent createUser =  {LoginUser} />
    {<LikesComponent initialLikes={2} />}
    </div>
  )
}

export default page