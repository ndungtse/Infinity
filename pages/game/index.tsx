import React from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'

const index = () => {
  return (
    <div className="flex w-full flex-col h-screen bg-stone-800 py-2">
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active='home' />
        <div className='w-full text-white flex h-full xtab:p-6 bg-stone-900'>
            
        </div>
      </div>
    </div>
  )
}

export default index