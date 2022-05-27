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


type Props = {
  isLoading: boolean,
  setIsLoading: any
}

const Home: NextPage<Props> = ({gameData,isLoading, setIsLoading}: any) => {
  console.log(process.env.NEXT_PUBLIC_KEY);
  const [isLinear, setLinear] = useState<boolean>(false)


  return (
    <>
      <Head>
        <title>Infinity</title>
        <link rel="icon" href="/logo2.png" />
      </Head>
    {isLoading?<HomeLoader />:( 
    <div className="flex w-full flex-col h-screen bg-stone-800">
      {isLinear &&<LinearIndeterminate />}
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
  console.log(process.env.REACT_APP_API_KEY);
  const res = await Axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`)
  return {
    props: {
      gameData: res.data
    },
  };
};

export default Home
