import { NextPage } from 'next'
import React, { useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'

const MyGames: NextPage = () => {
    const [isLinear, setLinear] = useState<boolean>(false)
  return (
    <div className="flex text-white w-full flex-col overflow-hidden h-screen bg-stone-800 ">
       <Navbar />
       <div className="flex h-full w-full">
          <SideBar active='mygames' setLinear={setLinear} />
          <div className="flex h-[90vh] w-full overflow-auto p-1 bg-stone-900 text-white xtab:p-6">
            <div className="flex flex-col w-full">
                <h2 className="text-xl font-semibold">Your Saved Games</h2>
                <div className="flex mt-7 items-center justify-between w-full rounded-xl bg-stone-800">
                    <div className="flex p-1 rounded-2xl w-1/3 aspect-video overflow-auto">
                        <img
                            className='min-w-full min-h-full object-cover'
                         src="/images/battlefield.jpg" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <p className='text-lg font-medium'>Name: Battlefield</p>
                        <p className='text-lg font-medium'>Publisher: Epic Games</p>
                        <p className='text-lg font-medium'>Released: 2021</p>
                    </div>
                    <div className="flex flex-col items-start py-2 pr-3">
                        <div className='flex cursor-pointer text-lg px-3 py-2 bg-stone-900 rounded-md
                    hover:bg-stone-700 duration-200 items-center'>
                        More details
                    </div>
                    <a className='flex mt-2 text-lg px-3 py-2 bg-stone-900 rounded-md
              hover:bg-stone-700 duration-200 items-center' rel="noreferrer" href={`https://steamunlocked.net/?s=`} target='_blank'>
              SteamUnlocked<BiDownload className='text-2xl ml-2' /></a>
              <a className='flex mt-2 text-lg px-3 py-2 bg-stone-900 rounded-md
              hover:bg-stone-700 duration-200 items-center' rel="noreferrer"
               href={`https://gamingbeasts.com/?s=`} target='_blank'>
              GamingBeasts<BiDownload className='text-2xl ml-2' /></a>
                    </div>
                </div>
            </div>
          </div>
       </div> 
    </div>
  )
}

export default MyGames