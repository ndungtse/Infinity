/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { getApi, getCustom } from '../../contexts/apiCallMethods'
import { useApp } from '../../contexts/AppContext'
import { usePosts } from '../../contexts/PostContext'

const ProComp = ({posts}: any) => {
    const { user, authHeaders } = useApp()
  return (
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
                        <div className="three:flex hidden flex-col items-center px-3">
                            <p className='text-xl font-semibold'>{posts?.length}</p>
                            <p className='font-semibold text-xs'>POSTS</p>
                        </div>
                        <div className="five:flex hidden border- flex-col items-center px-3">
                            <p className='text-xl font-semibold'>{user.friends.length}</p>
                            <p className='font-semibold text-xs'>FRIENDS</p>
                        </div>
                        <div className="five:flex hidden flex-col items-center px-3">
                            <p className='text-xl font-semibold'>{user.ownGames}</p>
                            <p className='font-semibold text-xs'>GAMES</p>
                        </div>
                    </div>
                    <div className="flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
                        <p className="font-semibold text-xl">{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                    <div className="three:flex hidden items-center justify-center">
                        <FaFacebook />
                    </div>
                    <div className='three:hidden flex p-4'></div>
                </div>
            </div>
        </div>
  )
}

export default ProComp