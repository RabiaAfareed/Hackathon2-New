"use client";
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function AdminComponent() {

    const {isLoaded, user} = useUser()
    const router = useRouter()

    useEffect(() => {

        if(isLoaded){
            const role = (user?.publicMetadata as {role?:string})?.role;

            if(!user || role !== 'admin'){
                router.push('/')
            }
        }
    }, [isLoaded, user , router])






  return (
    <div>I am admin page</div>
  )
}

export default AdminComponent