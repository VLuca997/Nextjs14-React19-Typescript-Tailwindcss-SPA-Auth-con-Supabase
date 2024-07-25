"use client"


import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaUserAlt } from 'react-icons/fa'
import { User } from '@supabase/supabase-js'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'


interface UserMenuProps{
  user: User
}

const UserMenu = ({user}:UserMenuProps ) => {

  const router = useRouter()

  const supabaseClient = createClient();
  const logout = async() =>{
    
  const { error } = await supabaseClient.auth.signOut()


  if(!error){

    router.refresh()
 }
  }

  return (
    <div><DropdownMenu>
    <DropdownMenuTrigger> 
      <FaUserAlt width={64} height={64} className='text-second'/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
      
    </DropdownMenuContent>
  </DropdownMenu>
  </div>
  )
}

export default UserMenu