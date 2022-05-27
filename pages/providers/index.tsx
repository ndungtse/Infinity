import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import React, { useState } from 'react'
import LinearIndeterminate from '../../components/Loaders/LinearLoad'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'

const Providers: NextPage = ({storeData}: any) => {
    const [isLinear, setLinear] = useState<boolean>(false)
    const [isLoading, SetIsLoading] = useState(true)

    console.log(storeData);
    

  return (
    <div className="flex w-full flex-col h-screen bg-stone-800">
      {isLinear&&<LinearIndeterminate />}
      <Navbar/>
      <div className="flex h-full w-full">
        <SideBar active='store'  setLinear={setLinear}  />
        <div className="flex h-full items-center justify-center w-full bg-stone-900 text-white xtab:p-6">
            <p>This Not You are Looking For</p>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async()=>{
    const res = await axios.get(`https://api.rawg.io/api/stores?key=${process.env.NEXT_PUBLIC_KEY}`)
    return {
      props: {
        storeData: res.data
      },
    };
}

export default Providers