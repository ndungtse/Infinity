import type { NextPage } from 'next'
import Head from 'next/head'
import Axios from 'axios'
import HomeComp from '../components/Home/HomeComp'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { GetStaticProps } from "next";
import { useEffect, useState } from 'react'

const Home: NextPage = ({gameData}: any) => {
  const [isLoading, SetIsLoading] = useState(true)
console.log(gameData);

const delay = ()=>{
  setTimeout(()=>{
    SetIsLoading(false)
  }, 3000)
}

useEffect(()=>{
  delay()
},[])

  return (
    <div className="flex w-full flex-col h-screen bg-stone-800 py-2">
      <Head>
        <title>Infinity</title>
        <link rel="icon" href="/logo2.png" />
      </Head>
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active='home' />
        <HomeComp gameData={ gameData } loading={isLoading} />
      </div>
    </div>
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
