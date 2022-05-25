import React from 'react'
import { BiDownload, BiStar } from 'react-icons/bi'

type Props = {
    item: any,
}

const GameCard = ({ item }: Props) => {
  return (
    <div className='rounded-xl mx-auto h-[250px] min-w-[200px] overflow-hidden relative flex flex-col'>
        <img src={item.background_image} className="min-w-full
        object-cover min-h-full" alt="" />
        <div className="flex absolute bottom-0 w-full justify-between
            bg-black bg-opacity-40 p-2 backdrop-blur-sm items-center">
            <div className="flex flex-col">
                <p className='text-bold text-lg'>{item.name}</p>
                <p className="">30.1k Users</p>
                <div className="flex">
                    <BiStar className='text-orange-500'/>
                    <BiStar className='text-orange-500'/>
                    <BiStar className='text-orange-500'/>
                    <BiStar className='text-orange-500'/>
                    <BiStar className='text-orange-500'/>
                </div>
            </div>
            <div className="">
            <button
            title='Download'
            className='bg-stone-800 mt-3 p-1 cursor-pointer rounded-md'>Details</button>
            </div>
        </div>
    </div>
  )
}

export default GameCard