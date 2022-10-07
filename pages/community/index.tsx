import React, { useState } from 'react'
import LinearLoader from '../../components/Loaders/LinearProgress'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'

const Communities = () => {
  const [isLinear, setLinear] = useState<boolean>(false)
  const [isLoading, SetIsLoading] = useState(false)
  
  return (
    <>{!isLoading && (
      <div className="flex text-white w-full flex-col h-screen bg-stone-800">
        {isLinear && <LinearLoader />}
        <Navbar />
        <div className="flex h-full w-full">
          <SideBar active='community'  setLinear={setLinear}  />
          <div className="flex h-[92vh] overflow-auto items-center flex-col w-full bg-stone-900 text-white pt-6 xtab:p-6">
          </div>
        </div>
      </div>)}
      </>
  )
}

export default Communities