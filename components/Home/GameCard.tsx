import React from 'react'
import { BiDownload, BiStar } from 'react-icons/bi'

const GameCard = () => {
  return (
    <div className='rounded-xl min-w-[200px] overflow-hidden relative flex flex-col'>
        <img src="/images/fifa22.jpeg" className="min-w-full
        object-cover min-h-full" alt="gameimage" />
        <div className="flex absolute bottom-0 w-full justify-between p-2 backdrop-blur-md items-center">
            <div className="flex flex-col">
                <p className='text-bold text-lg'>Fifa 22</p>
                <p className="">30.1k Users</p>
                <div className="flex">
                    <BiStar className='text-orange-500'/>
                    <BiStar className='text-orange-500'/>
                    <BiStar className='text-orange-500'/>
                    <BiStar className='text-orange-500'/>
                    <BiStar className='text-orange-500'/>
                </div>
            </div>
            <BiDownload 
            title='Download'
            className='bg-pink-500 text-4xl p-2 cursor-pointer rounded-full'/>
        </div>
    </div>
  )
}

export default GameCard