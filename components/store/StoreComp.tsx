import Axios from 'axios'
import Link from 'next/link'
import React, { SetStateAction, useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Footer from '../Footer'
import GameCard from '../Home/GameCard'
import CardLoader from '../Loaders/CardLoader'
import PaginationRanges from '../Loaders/Pagination'
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
    const panelRef: React.MutableRefObject<null> = useRef(null)

    const panel: any = panelRef.current

    const filterGames = (genre:string) =>{
      let arr = [];
      for (let i = 0; i < pageGames.length; i++) {
          for (let j = 0; j < pageGames[i].genres.length; j++) {
            if (pageGames[i].genres[j].name === genre) {
                arr.push(pageGames[i])
            }              
          }
          
      }
      setFilteredGames(arr)
  }

  const scrollToTop = ()=>{
    panel.scrollTop = 0;
  }

  return (
    <div className='w-full text-white flex h-full xtab:p-6 bg-stone-900'>
        <div
          ref={panelRef}
         className="flex flex-col overflow-x-hidden w-full h-[84vh] overflow-auto">
            <SearchForm setLoading={setLoading} />
            <Filter filterGames={ filterGames }
             setFilteredGames={setFilteredGames} pageGames={pageGames} />
            <h2 className="ml-2 text-xl font-bold mt-3">Games</h2>
             {loading?<CardLoader />:(
            <div className="grid gap-4 five:w-full mx-auto w-[270px] px-2 xtab:grid-cols-2 tablet:grid-cols-3
            five:grid-cols-2 grid-cols-[50%] ltop:grid-cols-3  desktop:grid-cols-4 mt-4">
              {filteredGames.map((game: any, index: React.Key | null | undefined)=>(
              <GameCard item={game} key={index} />
              ))}
            </div>
             )}
             <PaginationRanges  top={scrollToTop}  />
             <Footer />
        </div>
    </div>
  )
}

export default StoreComp