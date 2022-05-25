import React from 'react'
import CardLoader from '../components/Loaders/CardLoader'
import HomeLoader from '../components/Loaders/HomeLoader'
import Game from './game/[game]'

const Test = () => {
  return (
    <div className='w-full h-screen bg-slate-800'>
      <Game />
    </div>
  )
}

export default Test