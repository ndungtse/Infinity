import React, { useState } from 'react'
import LinearLoader from '../../components/Loaders/LinearProgress'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'

const Test = () => {
    const [isLinear, setLinear] = useState<boolean>(false)
  return (
    <div className="flex w-full flex-col h-screen bg-stone-800">
      {isLinear&&<LinearLoader />}
      <Navbar/>
      <div className="flex h-full w-full">
        <SideBar active='store'  setLinear={setLinear}  />
        <div className="flex h-full items-center justify-center w-full bg-stone-900 text-white xtab:p-6">
            <p>This Not You are Looking For</p>
        </div>
      </div>
    </div>
  )
}

export default Test