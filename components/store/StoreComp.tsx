import Axios from 'axios'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import GameCard from '../Home/GameCard'

interface Props {
    gameData: any
  }

const StoreComp = ({gameData}: Props)=> {
    const firstPageGames = gameData.results.slice(0,28)
    const [page, setPage] = useState(1)
    const [pageGames, setPageGames] = useState(firstPageGames)

    const getNextPageGames = async(page:number)=>{
      const res = await Axios.get(`https://api.rawg.io/api/games?key=a5c36a8abe0c4ddb9489dc567b3cf68d&page=${page}`)
      console.log(res);
      setPageGames(res.data.results)
    }

  return (
    <div className='w-full text-white flex h-full xtab:p-6 bg-stone-900'>
        <div className="flex flex-col overflow-x-hidden w-full h-[84vh] overflow-auto">
            
                <div className="flex mt-4 tr sm:ml-0 w-1/2 mx-auto bg-stone-800 text-sm tablet:text-lg text-white rounded-3xl
                 items-center px-3 py-2">
                    <BiSearch className='text-sm mt-1 tablet:text-2xl' />
                    <input
                    maxLength={70}
                    className='sm:w-full tablet:text-lg text-[0.9em] w-full px-2 outline-none bg-transparent'
                     type="text" placeholder='Search Store ' />
                </div>
            <div className="flex mt-6 mx-auto">
                <button className='px-3 py-2 border-stone-800 hover:bg-stone-800 duration-200
                flex items-center justify-center bg-stone-800 border-2 rounded-xl'>All</button>
                <button className='px-3 py-2 hover:bg-stone-800 duration-200 border-stone-800
                flex items-center justify-center border-2 ml-4 rounded-xl'>Shooter</button>
                <button className='px-3 py-2 hover:bg-stone-800 duration-200 border-stone-800
                flex items-center justify-center border-2 ml-4 rounded-xl'>Racing</button>
                <button className='px-3 py-2 hover:bg-stone-800 duration-200 border-stone-800
                flex items-center justify-center border-2 ml-4 rounded-xl'>Sports</button>
                <button className='px-3 py-2 hover:bg-stone-800 duration-200 border-stone-800
                flex items-center justify-center border-2 ml-4 rounded-xl'>Strategy</button>
            </div>
            <h2 className="ml-2 text-xl font-bold mt-3">All Games</h2>
            <div className="grid gap-4 five:w-full mx-auto w-[230px] px-2 xtab:grid-cols-2 tablet:grid-cols-3
              five:grid-cols-2 grid-cols-[50%]  desktop:grid-cols-4 mt-4">
              {pageGames.map((game: any, index: React.Key | null | undefined)=>(
              <GameCard item={game} key={index} />
              ))}
            </div>
            <button
              onClick={()=>getNextPageGames(2)}
             className='bg-pink-500 px-3 py-2 rounded-md'>Next</button>
        </div>
    </div>
  )
}

export default StoreComp