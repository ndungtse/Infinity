import type { NextPage } from 'next'
import Head from 'next/head'
import Axios from 'axios'
import HomeComp from '../components/Home/HomeComp'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { GetStaticProps } from "next";
import { useEffect, useState } from 'react'
import HomeLoader from '../components/Loaders/HomeLoader'
import LinearIndeterminate from '../components/Loaders/LinearLoad'
import LinearLoader from '../components/Loaders/LinearProgress'


type Props = {
  isLoading: boolean,
  setIsLoading: any
}

const Home: NextPage<Props> = ({gameData,isLoading, setIsLoading}: any) => {
  const [isLinear, setLinear] = useState<boolean>(false)


  return (
    <>
    {isLoading?<HomeLoader />:( 
    <div className="flex w-full flex-col h-screen bg-stone-800">
      {isLinear &&<LinearLoader />}
      <Navbar/>
      <div className="flex h-full w-full">
        <SideBar active='home' setLinear={setLinear} />
        <HomeComp gameData={ gameData }
         loading={isLoading} />
      </div>
    </div>
    )} 
    </>
  )
}

export const getStaticProps: GetStaticProps = async()=>{
  const page = Math.ceil(Math.random()*30)
  const res = await Axios.get(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_KEY}&page=${page}&page_size=8`)
  console.log(res);
  return {
    props: {
      gameData: res?.data??[]
    },
  };
};

export default Home
