import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import LinearIndeterminate from '../../components/Loaders/LinearLoad'
import { useApp } from '../../contexts/AppContext'
import { useRouter } from 'next/router'
import LinearLoader from '../../components/Loaders/LinearProgress'
import ProComp from '../../components/profile/ProComp'

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
      {isLinear&&<LinearLoader />}
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active='profile'  setLinear={setLinear}  />
        <div className="flex h-full items-center flex-col w-full bg-stone-900 text-white pt-6 xtab:p-6">
          <ProComp />
        </div>
      </div>
    </div>)}
    </>
  )
}

export default Profile