import Link from 'next/link'
import React from 'react'
import Feed from './Feed'
import GameCard from './GameCard'

interface Props {
  gameData: Array<object>
}

const HomeComp: React.FC <Props> = ({gameData}) => {
  const newest: object[] = gameData.slice(0, 8)
  const featured: object[]= gameData.slice(100, 108)
  console.log(newest);

  return (
    <div className='w-full text-white flex h-full xtab:p-6 bg-stone-900'>
        <div className="flex flex-col overflow-x-hidden w-full h-[84vh] overflow-auto">
            <div className="flex relative w-full h-[30vh] rounded-xl">
                <img
                 className='object-cover rounded-xl min-h-full min-w-full '
                 src="/images/battlefield.jpg" alt="" />
                 <div className="absolute top-9 left-5">
                    <p>NEW GAME HERE</p>
                    <h1 className="text-2xl mt-3">Games are games, Games are infinity. Just Play</h1>
                    <button className='px-3 py-2 mt-5 bg-pink-500 rounded-lg'>Start Now</button>
                 </div>
            </div>
            <h2 className="ml-2 text-xl font-bold mt-3">Newest</h2>
            <div className="grid gap-4 five:w-full mx-auto w-[230px] px-2 xtab:grid-cols-2 tablet:grid-cols-3
              five:grid-cols-2 grid-cols-[50%]  desktop:grid-cols-4 mt-4">
              {newest.map((game, index)=>(
              <GameCard item={game} key={index} />
              ))}
            </div>
            <h2 className="ml-2 text-xl font-bold mt-3">Featured</h2>
            <div className="grid gap-4 five:w-full mx-auto w-[230px] px-2 xtab:grid-cols-2 tablet:grid-cols-3
              five:grid-cols-2 grid-cols-[50%]  desktop:grid-cols-4 mt-4">
              {featured.map((feature, index) => (
              <GameCard item={ feature } key={index} />
              ))}
            </div>
            <div className="flex mt-5 w-full">
            <Link href="/store">
              <button className='bg-pink-500 px-3 py-2 rounded-md'>See More</button>
              </Link>
            </div>
        </div>
        <Feed />
    </div>
  )
}



export default HomeComp

