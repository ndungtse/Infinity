import React from 'react'
import Footer from '../components/Footer'
import CardLoader from '../components/Loaders/CardLoader'
import HomeLoader from '../components/Loaders/HomeLoader'
import StoreLoader from '../components/Loaders/storesLoader'
import Game from './game/[game]'

const Test = () => {
  return (
    <div className='w-full h-screen bg-slate-800'>
      <StoreLoader />
    </div>
  )
}

export default Test