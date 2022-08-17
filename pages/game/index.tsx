import React, { useState } from 'react'
import LinearIndeterminate from '../../components/Loaders/LinearLoad'
import LinearLoader from '../../components/Loaders/LinearProgress'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import Game from './[game]'

const GamePage = () => {
  const [isLinear, setLinear] = useState<boolean>(false)
  return (
    <div className="flex w-full flex-col h-screen bg-stone-800">
      {isLinear&& <LinearLoader />}
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active='home' setLinear={setLinear} />
        <div className='w-full text-white flex h-full xtab:p-6 bg-stone-900'>
           <Game /> 
        </div>
      </div>
    </div>
  )
}

export default GamePage