import Axios from 'axios'
import Link from 'next/link'
import React, { SetStateAction, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import GameCard from '../Home/GameCard'
import CardLoader from '../Loaders/CardLoader'
import Filter from './Filter'
import SearchForm from './Search'

interface Props {
    gameData: any,
    loading: boolean,
    setLoading: React.Dispatch<SetStateAction<boolean>>
  }

const StoreComp = ({gameData, loading, setLoading}: Props)=> {
    const firstPageGames = gameData.results.slice(0,28)
    const [page, setPage] = useState(1)
    const [pageGames, setPageGames] = useState(firstPageGames)
    const [filteredGames, setFilteredGames] = useState(pageGames)


    const filterGames = (genre:string) =>{
      let arr = [];
      for (let i = 0; i < pageGames.length; i++) {
          for (let j = 0; j < pageGames[i].genres.length; j++) {
            if (pageGames[i].genres[j].name === genre) {
                arr.push(pageGames[i])
            }              
          }
          
      }
      console.log(arr);
      setFilteredGames(arr)
  }

  return (
    <div className='w-full text-white flex h-full xtab:p-6 bg-stone-900'>
        <div className="flex flex-col overflow-x-hidden w-full h-[84vh] overflow-auto">
            <SearchForm setLoading={setLoading} />
            <Filter filterGames={ filterGames } />
            <h2 className="ml-2 text-xl font-bold mt-3">Games</h2>
              <CardLoader />
            <div className="grid gap-4 five:w-full mx-auto w-[230px] px-2 xtab:grid-cols-2 tablet:grid-cols-3
              five:grid-cols-2 grid-cols-[50%]  desktop:grid-cols-4 mt-4">
              {filteredGames.map((game: any, index: React.Key | null | undefined)=>(
              <GameCard item={game} key={index} />
              ))}
            </div>
            <Link href="/store/2">
              <button
               className='bg-stone-800 w-[150px] mx-auto mt-4 hover:bg-stone-700
               duration-200 px-3 py-2 rounded-md'>Next</button>
             </Link>
        </div>
    </div>
  )
}

export default StoreComp