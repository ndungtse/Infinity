import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import LinearIndeterminate from '../../components/Loaders/LinearLoad'
import { useApp } from '../../contexts/AppContext'
import { useRouter } from 'next/router'

const Profile = () => {
    const { user } = useApp()
    const [isLinear, setLinear] = useState<boolean>(false)
    const [isLoading, SetIsLoading] = useState(true)

    const router = useRouter()
    
    useEffect(() => {
        if(user===null){
            router.push('/user/login')
        }else{
            SetIsLoading(false)
        }
    }, [])

  return (
    <>{!isLoading && (
    <div className="flex w-full flex-col h-screen bg-stone-800">
      {isLinear&&<LinearIndeterminate />}
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active='profile'  setLinear={setLinear}  />
        <div className="flex h-full items-center justify-center w-full bg-stone-900 text-white xtab:p-6">
            <p>{user.name}</p>
        </div>
      </div>
    </div>)}
    </>
  )
}

export default Profile