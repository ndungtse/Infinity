import Axios from 'axios'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { useEffect, useState } from 'react'
import { BiArrowBack, BiSearch } from 'react-icons/bi'
import GameCard from '../../../components/Home/GameCard'
import CardLoader from '../../../components/Loaders/CardLoader'
import Navbar from '../../../components/Navbar'
import SideBar from '../../../components/SideBar'
import Filter from '../../../components/store/Filter'
import SearchForm from '../../../components/store/Search'

const Search = () => {
    const router: NextRouter = useRouter()
    const [searchRes, setSearchRes] = useState([])
    const [loading, setLoading] = useState(true)

    const { search }: ParsedUrlQuery = router.query
    console.log(search);
    
    const getSearchedItem = async()=>{
      setLoading(true)
      const res = await Axios.get(`https://api.rawg.io/api/games?key=a5c36a8abe0c4ddb9489dc567b3cf68d&search=${search}`)
      setSearchRes(res.data.results)
      setLoading(false)
    }

    useEffect(()=>{
      getSearchedItem()
    },[search])

  return (
    <div className="flex h-screen w-full flex-col bg-stone-800 py-2">
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active='store' />
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
              className="mx-auto mt-4  grid w-[230px] grid-cols-[50%] gap-4 px-2 
            five:grid-cols-2 five:w-full tablet:w-full  tablet:grid-cols-3 desktop:grid-cols-4"
            >
              {searchRes.map((game, index)=>(
                <GameCard item={game} key={index}/>
                ))}
            </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Search
