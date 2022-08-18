import React from 'react'
import { BiFace } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa'
import { useApp } from '../../contexts/AppContext'

const ProComp = () => {
    const { user } = useApp()
  return (
    <div className='w-9/12 flex flex-col'>
        <div className="flex flex-col w-full rounded-lg bg-violet-900/80">
            <div className="w-full overflow-hidden h-[30vh] aspect-video rounded-t-lg">
                <img className='object-cover min-h-full min-w-full' src="/images/battlefield.jpg" alt="" />
            </div>
            <div className="relative">
                <div className="absolute -top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[150px] h-[150px] rounded-full bg-transparent overflow-hidden border-4 border-violet-900/90 ">
                    <img className='min-w-full min-h-full object-cover' src={user.picture} alt="" />
                </div>
                <div className="flex pt-11 w-full pb-2 px-2 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex flex-col items-center px-3">
                            <p className='text-xl font-semibold'>7</p>
                            <p className='font-semibold text-xs'>POSTS</p>
                        </div>
                        <div className="flex border- flex-col items-center px-3">
                            <p className='text-xl font-semibold'>7</p>
                            <p className='font-semibold text-xs'>POSTS</p>
                        </div>
                        <div className="flex flex-col items-center px-3">
                            <p className='text-xl font-semibold'>7</p>
                            <p className='font-semibold text-xs'>POSTS</p>
                        </div>
                    </div>
                    <div className="flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
                        <p className="font-semibold text-xl">{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <FaFacebook />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProComp