import React from 'react'
import { BiDownload, BiStar } from 'react-icons/bi'

type Props = {
    item: any,
}

const GameCard = ({ item }: Props) => {
  return (
    <div className='rounded-xl mx-auto h-[200px] min-w-[200px] overflow-hidden relative flex flex-col'>
        <img src={item.thumbnail} className="min-w-full
        object-cover min-h-full" alt="gameimage" />
        <div className="flex absolute bottom-0 w-full justify-between p-2 backdrop-blur-md items-center">
            <div className="flex flex-col">
                <p className='text-bold text-lg'>{item.title}</p>
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
            {/* <BiDownload 
            title='Download'
            className='bg-stone-800 text-4xl p-2 cursor-pointer rounded-full'/> */}
            <button
            title='Download'
            className='bg-stone-800 mt-3 p-1 cursor-pointer rounded-md'>Details</button>
            </div>
        </div>
    </div>
  )
}

export default GameCard