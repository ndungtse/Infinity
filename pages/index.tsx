import type { NextPage } from 'next'
import Head from 'next/head'
import Axios from 'axios'
import HomeComp from '../components/Home/HomeComp'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { GetStaticProps } from "next";

const Home: NextPage = ({gameData}: any) => {

  return (
    <div className="flex w-full flex-col h-screen bg-stone-800 py-2">
      <Head>
        <title>Infinity</title>
        <link rel="icon" href="/logo2.png" />
      </Head>
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar />
        <HomeComp gameData={ gameData } />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async()=>{
  const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': 'bbce629d3cmsh48cb41094daa35cp1157cejsn05466969482c'
      }
    };
  const res = await Axios.request(options)
  return {
    props: {
      gameData: res.data
    },
  };
};

export default Home
