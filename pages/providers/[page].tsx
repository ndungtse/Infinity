/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Axios from 'axios'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import LinearIndeterminate from '../../components/Loaders/LinearLoad'
import Link from 'next/link'
import ProRanges from '../../components/Loaders/pagin'
import StoreLoader from '../../components/Loaders/storesLoader'
import LinearLoader from '../../components/Loaders/LinearProgress'

const Page = ({ gameData }: any) => {
  const router: any = useRouter()
  const [pageStores, setPageStores] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isLinear, setLinear] = useState<boolean>(false)
  const { page }: any = router.query
  const panelRef: React.MutableRefObject<null> = useRef(null)


  const panel: any = panelRef.current

  const getNextPageGames = async () => {
    setLoading(true)
    const res = await Axios.get(
      `https://api.rawg.io/api/developers?key=${process.env.NEXT_PUBLIC_KEY}&page=${page}`
    )
    setLoading(false)
    setPageStores(res.data.results)
  }

  const scrollToTop = () => {
    panel.scrollTop = 0
  }

  useEffect(() => {
    getNextPageGames()
  }, [page])

  return (
    <div className="flex h-screen w-full flex-col bg-stone-800">
      {isLinear && <LinearLoader />}
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active="providers" setLinear={setLinear} />

        <div className="flex h-full w-full bg-stone-900 text-white xtab:p-6">
          <div
            ref={panelRef}
            className="flex h-[84vh] w-full flex-col overflow-auto overflow-x-hidden"
          >
                <h2 className="ml-2 mt-3 text-xl font-bold">Stores</h2>
                {loading?<StoreLoader />:(
                  pageStores.map(
                  (store: any, index: React.Key | null | undefined) => (
                    <div key={index}
                     className="mx-auto mt-7 w-9/12 min-w-[280px] flex-col items-center justify-between rounded-xl bg-stone-800 tablet:flex tablet:w-full tablet:flex-row">
                      <div className="flex aspect-video overflow-hidden rounded-2xl  p-1 tablet:w-[250px]">
                        <img
                          className="min-h-full min-w-full w-full object-cover"
                          src={store.image_background}
                          alt="bg_image"
                        />
                      </div>
                      <div className="flex flex-col w-2/12 ml-2">
                        <p className="text-lg font-medium">Name:</p>
                        <p> {store.name}</p>
                      </div>
                      <div className="flex ml-2 tablet:w-6/12 flex-col flex-wrap w-wrap">
                            <p className="text-lg font-medium">Games: </p>
                            <div className='flex flex-wrap w-full'>
                                {store.games.map((game: any, index: number)=>(
                                
                                        <Link key={index} href={`/game/${game.id}`}>
                                            <p className='px-2 py-1 bg-stone-900 m-1 cursor-pointer'>{game.name}</p>
                                        </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                  )
                )
                )}
                <ProRanges top={scrollToTop} />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Page
