import React, { useState } from 'react'
import LinearIndeterminate from '../../components/Loaders/LinearLoad'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'

const index = () => {
  const [isLinear, setLinear] = useState<boolean>(false)
  return (
    <div className="flex w-full flex-col h-screen bg-stone-800">
      {isLinear&& <LinearIndeterminate />}
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active='home' setLinear={setLinear} />
        <div className='w-full text-white flex h-full xtab:p-6 bg-stone-900'>
            
        </div>
      </div>
    </div>
  )
}

export default index