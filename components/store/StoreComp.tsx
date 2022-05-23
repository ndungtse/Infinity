import React from 'react'
import { BiSearch } from 'react-icons/bi'
import GameCard from '../Home/GameCard'

interface Props {
    gameData: Array<object>
  }

const StoreComp = ({gameData}: Props)=> {
  return (
    <div className='w-full text-white flex h-full xtab:p-6 bg-stone-900'>
        <div className="flex flex-col overflow-x-hidden w-full h-[84vh] overflow-auto">
            
                <div className="flex mt-4 tr sm:ml-0 w-1/2 mx-auto bg-stone-800 text-sm tablet:text-lg text-white rounded-3xl items-center px-3 py-3">
                    <BiSearch className='text-sm mt-1 tablet:text-2xl' />
                    <input
                    maxLength={70}
                    className='sm:w-full tablet:text-xl text-[0.9em] w-full px-2 outline-none bg-transparent'
                     type="text" placeholder='Search Store ' />
                </div>
            <div className="flex w-full">

            </div>
            <h2 className="ml-2 text-xl font-bold mt-3">All Games</h2>
            <div className="grid gap-4 five:w-full mx-auto w-[230px] px-2 xtab:grid-cols-2 tablet:grid-cols-3
              five:grid-cols-2 grid-cols-[50%]  desktop:grid-cols-4 mt-4">
              {gameData.map((game, index)=>(
              <GameCard item={game} key={index} />
              ))}
            </div>
        </div>
    </div>
  )
}

export default StoreComp