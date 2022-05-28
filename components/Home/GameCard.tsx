import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiDownload, BiStar } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'

type Props = {
    item: any,
}

const GameCard = ({ item }: Props) => {
    
    const rating: number = Math.round(item.rating) 

  return (
    <Link href={`/game/${item.id}`}>
    <div className='rounded-xl cursor-pointer mx-auto h-[250px] min-w-[200px] w-[250px] overflow-hidden relative flex flex-col'>
        {item.background_image!==null&&(
        <Image src={item.background_image} className="min-w-full
        object-cover min-h-full" height={1920} width={1080} alt="" />
        )}
        <div className="flex absolute bottom-0 w-full justify-between
            bg-black bg-opacity-40 p-2 backdrop-blur-sm items-center">
            <div className="flex flex-col">
                <p className='text-bold text-lg'>{item.name}</p>
                <p className="">{item.ratings_count} Rating Count</p>
                <div className="flex">
                    <FaStar
                     className={`${rating>=1 && 'text-orange-500'}`}/>
                    <FaStar
                     className={`${rating>=2 && 'text-orange-500'}`}/>
                    <FaStar
                     className={`${rating>=3 && 'text-orange-500'}`}/>
                    <FaStar
                     className={`${rating>=4 && 'text-orange-500'}`}/>
                    <FaStar
                     className={`${rating>=5 && 'text-orange-500'}`}/>
                </div>
            </div>
            <div className="">
            <button
            title='Download'
            className='bg-stone-800 mt-3 p-1 cursor-pointer rounded-md'>Details</button>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default GameCard