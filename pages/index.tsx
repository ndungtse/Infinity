import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-stone-800 py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/logo2.png" />
      </Head>
      <SideBar />
    </div>
  )
}

export default Home
