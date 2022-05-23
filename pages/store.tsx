import type { NextPage } from 'next'
import Axios from 'axios'
import { GetStaticProps } from "next";
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import StoreComp from '../components/store/StoreComp';

const Store: NextPage = ({gameData}: any) => {
  console.log(gameData);
  
  return (
    <div className="flex w-full flex-col h-screen bg-stone-800 py-2">
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar />
        <StoreComp gameData ={ gameData } />
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
  console.log(res);
  return {
    props: {
      gameData: res.data
    },
  };
};

export default Store
