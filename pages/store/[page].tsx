import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Axios from 'axios'
import { GetStaticProps } from 'next'
import { BiSearch } from 'react-icons/bi'
import GameCard from '../../components/Home/GameCard'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import Filter from '../../components/store/Filter'
import CardLoader from '../../components/Loaders/CardLoader'

const Page = ({ gameData }: any) => {
  const router: any = useRouter()
  const [pageGames, setPageGames] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [filteredGames, setFilteredGames] = useState(pageGames)
  const { page }: any = router.query
  const nextPage = parseInt(page)+1
  const panelRef: React.MutableRefObject<null> = useRef(null)

  console.log(page);
  

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
      console.log(arr);
      setFilteredGames(arr)
  }

  const getNextPageGames = async () => {
      setLoading(true)
    const res = await Axios.get(
      `https://api.rawg.io/api/games?key=a5c36a8abe0c4ddb9489dc567b3cf68d&page=${page}`
    )
    console.log(res)
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
    <div className="flex h-screen w-full flex-col bg-stone-800 py-2">
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar />
        
        <div className="flex h-full w-full bg-stone-900 text-white xtab:p-6">
          <div 
          ref={panelRef}
          className="flex h-[84vh] w-full flex-col overflow-auto overflow-x-hidden">
            <div
              className="tr sm:ml-0 mx-auto mt-4 flex w-1/2 items-center rounded-3xl bg-stone-800 px-3 py-2
             text-sm text-white tablet:text-lg"
            >
              <BiSearch className="mt-1 text-sm tablet:text-2xl" />
              <input
                maxLength={70}
                className="sm:w-full w-full bg-transparent px-2 text-[0.9em] outline-none tablet:text-lg"
                type="text"
                placeholder="Search Store "
              />
            </div>
            <Filter filterGames={filterGames} />
            <h2 className="ml-2 mt-3 text-xl font-bold">All Games</h2>
            {loading?<CardLoader />:(
            <div
              className="mx-auto mt-4  grid w-[230px] grid-cols-[50%] gap-4 px-2 
            five:grid-cols-2 five:w-full tablet:w-full  tablet:grid-cols-3 desktop:grid-cols-4"
            >
              {filteredGames.map(
                (game: any, index: React.Key | null | undefined) => (
                  <GameCard item={game} key={index} />
                )
              )}
            </div>
             )}
            <Link href={`/store/${nextPage}`}>
              <button 
              onClick={scrollToTop}
              className="rounded-md hover:bg-stone-700 w-[100px] mx-auto
              bg-stone-800 mt-5 duration-200 px-3 py-2">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async()=>{

//     const res = await Axios.get('https://api.rawg.io/api/games?key=a5c36a8abe0c4ddb9489dc567b3cf68d')
//     return {
//       props: {
//         gameData: res.data
//       },
//     };
//   };

export default Page
