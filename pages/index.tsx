import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeComp from '../components/Home/HomeComp'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <div className="flex w-full flex-col h-screen bg-stone-800 py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/logo2.png" />
      </Head>
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar />
        <HomeComp />
      </div>
    </div>
  )
}

export default Home
