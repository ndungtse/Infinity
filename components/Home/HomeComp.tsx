import React from 'react'
import Feed from './Feed'
import GameCard from './GameCard'

const HomeComp = () => {
  return (
    <div className='w-full text-white flex h-full xtab:p-6 bg-stone-900'>
        <div className="flex flex-col w-full h-[84vh] overflow-auto">
            <div className="flex relative w-full h-[30vh] rounded-xl">
                <img
                 className='object-cover rounded-xl min-h-full min-w-full '
                 src="/images/battlefield.jpg" alt="" />
                 <div className="absolute top-9 left-5">
                    <p>NEW GAME HERE</p>
                    <h1 className="text-2xl mt-3">Games are games, Games are infinity. Just Play</h1>
                    <button className='px-3 py-2 mt-5 bg-pink-500 rounded-lg'>Start Now</button>
                 </div>
            </div>
            <h2 className="text-xl font-bold mt-3">Newest</h2>
            <div className="grid auto-cols-[23%] mt-4">
              <GameCard />
            </div>
            <h2 className="text-xl font-bold mt-3">Featured</h2>
            <div className="grid auto-cols-[23%] mt-4">
              <GameCard />
            </div>
        </div>
        <Feed />
    </div>
  )
}

export default HomeComp