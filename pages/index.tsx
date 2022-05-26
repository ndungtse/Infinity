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
  console.log(isLoading);
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
      <Navbar setLinear={setLinear} />
      <div className="flex h-full w-full">
        <SideBar active='home' />
        <HomeComp gameData={ gameData }
         loading={isLoading} />
      </div>
    </div>
    )} 
    </>
  )
}

export const getStaticProps: GetStaticProps = async()=>{
  
  const res = await Axios.get('https://api.rawg.io/api/games?key=a5c36a8abe0c4ddb9489dc567b3cf68d')
  return {
    props: {
      gameData: res.data
    },
  };
};

export default Home
