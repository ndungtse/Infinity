import React from 'react'
import { BiFace } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa'

const ProComp = () => {
  return (
    <div className='w-9/12 flex flex-col'>
        <div className="flex flex-col w-full rounded-lg bg-violet-800">
            <div className="w-full overflow-hidden h-[30vh] aspect-video rounded-t-lg">
                <img className='object-cover min-h-full min-w-full' src="/images/battlefield.jpg" alt="" />
            </div>
            <div className="relative">
                <div className="absolute -top-1/2 -translate-y-2/3 left-1/2 -translate-x-1/2 w-[150px] h-[150px] rounded-full bg-transparent overflow-hidden border-4 border-violet-800 ">
                    <img className='min-w-full min-h-full object-cover' src="/images/infinity.jpg" alt="" />
                </div>
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex flex-col items-center` px-3">
                            <p className='text-2xl font-semibold'>7</p>
                            <p className='font-semibold text-sm'>POSTS</p>
                        </div>
                        <div className="flex border-x flex-col items-center` px-3">
                            <p className='text-2xl font-semibold'>7</p>
                            <p className='font-semibold'>POSTS</p>
                        </div>
                        <div className="flex flex-col items-center` px-3">
                            <p className='text-2xl font-semibold'>7</p>
                            <p className='font-semibold'>POSTS</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-semibold text-xl">Marina Valentine</p>
                        <p>@odidesignthemes</p>
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