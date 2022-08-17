 /* eslint-disable */ 
import Axios from 'axios'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { useEffect, useState } from 'react'
import { BiArrowBack, BiSearch } from 'react-icons/bi'
import GameCard from '../../../components/Home/GameCard'
import CardLoader from '../../../components/Loaders/CardLoader'
import LinearIndeterminate from '../../../components/Loaders/LinearLoad'
import LinearLoader from '../../../components/Loaders/LinearProgress'
import Navbar from '../../../components/Navbar'
import SideBar from '../../../components/SideBar'
import Filter from '../../../components/store/Filter'
import SearchForm from '../../../components/store/Search'

const Search = () => {
    const router: NextRouter = useRouter()
    const [searchRes, setSearchRes] = useState([])
    const [loading, setLoading] = useState(true)
    const [isLinear, setLinear] = useState<boolean>(false)

    const { search }: ParsedUrlQuery = router.query
    
    const getSearchedItem = async()=>{
      if (search!==undefined) { 
      setLoading(true)
      const res = await Axios.get(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_KEY}&search=${search}`)
      console.log(res.data.results);
      setSearchRes(res.data.results)
      setLoading(false)
    }
    }

    useEffect(()=>{
      getSearchedItem()
    },[search])

  return (
    <div className="flex h-screen w-full flex-col bg-stone-800">
      {isLinear&&<LinearLoader />}
      <Navbar/>
      <div className="flex h-full w-full">
        <SideBar active='store' setLinear={setLinear}  />
        <div className="flex h-full w-full bg-stone-900 text-white xtab:p-6">
          <div className="flex h-[84vh] w-full flex-col overflow-auto overflow-x-hidden">
            <SearchForm setLoading={setLoading} />
            <div className="mt-5 flex w-full px-[10%] items-center justify-between">
              <Link href="/store">
                <button>
                <BiArrowBack className=' cursor-pointer
                text-2xl text-white bg-stone-700 rounded-full p-1' />
                </button>
                </Link>
              <p>Results for { search }</p>
              <p>{searchRes.length} results</p>
            </div>
            {loading?<CardLoader />:(
            <div
              className="grid gap-4 five:w-full mx-auto w-[270px] px-2 xtab:grid-cols-2 tablet:grid-cols-3
              five:grid-cols-2 grid-cols-[50%] ltop:grid-cols-3  desktop:grid-cols-4 mt-4"
            >
              {searchRes.length !== 0 &&(
              searchRes.map((game, index)=>(
                <GameCard item={game} key={index}/>
                )))}
            </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Search
