import { NextPage } from 'next'
import React from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'

const Preview: NextPage = () => {
  return (
    <div className="flex w-full flex-col h-screen bg-stone-800 py-2">
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar />
      </div>
    </div>
  )
}

export default Preview