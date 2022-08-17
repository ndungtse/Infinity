 /* eslint-disable */ 
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Axios from 'axios'
import GameCard from '../../components/Home/GameCard'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import Filter from '../../components/store/Filter'
import CardLoader from '../../components/Loaders/CardLoader'
import SearchForm from '../../components/store/Search'
import PaginationRanges from '../../components/Loaders/Pagination'
import LinearIndeterminate from '../../components/Loaders/LinearLoad'
import Footer from '../../components/Footer'
import LinearLoader from '../../components/Loaders/LinearProgress'

const Page = ({ gameData }: any) => {
  const router: any = useRouter()
  const [pageGames, setPageGames] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isLinear, setLinear] = useState<boolean>(false)
  const [filteredGames, setFilteredGames] = useState(pageGames)
  const { page }: any = router.query
  // const nextPage = parseInt(page)+1
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

  const getNextPageGames = async () => {
      setLoading(true)
    const res = await Axios.get(
      `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_KEY}&page=${page}`
    )
    setLoading(false)
    setPageGames(res.data.results)
    setFilteredGames(res.data.results)
  }

  const scrollToTop = ()=>{
    panel.scrollTop = 0;
  }

  useEffect(() => {
    getNextPageGames()
  }, [page])

  return (
    <div className="flex h-screen w-full flex-col bg-stone-800">
      {isLinear&&<LinearLoader />}
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active='store' setLinear={setLinear} />
        
        <div className="flex h-full w-full bg-stone-900 text-white xtab:p-6">
          <div 
          ref={panelRef}
          className="flex h-[84vh] w-full flex-col overflow-auto overflow-x-hidden">
            <SearchForm setLoading={setLoading} />
            <Filter filterGames={filterGames} pageGames={pageGames}
               setFilteredGames={filteredGames} />
            <h2 className="ml-2 mt-3 text-xl font-bold">Games</h2>
            {loading?<CardLoader />:(
            <div
              className="grid gap-4 five:w-full mx-auto w-[270px] px-2 xtab:grid-cols-2 tablet:grid-cols-3
              five:grid-cols-2 grid-cols-[50%] ltop:grid-cols-3  desktop:grid-cols-4 mt-4"
            >
              {filteredGames.map(
                (game: any, index: React.Key | null | undefined) => (
                  <GameCard item={game} key={index} />
                )
              )}
            </div>
             )}
            <PaginationRanges top={scrollToTop}/>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
