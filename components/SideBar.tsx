import React from 'react'
import { BiGroup, BiHome, BiJoystick, BiLibrary, BiStore,  } from 'react-icons/bi'

function SideBar() {
    
  return (
    <div className="xtab:flex h-full hidden absolute xtab:relative text-white w-[180px] flex-col justify-between">
      <div className="flex flex-col">
        <div className="ml-7 xtab:hidden flex w-[100px]">
          <img className="w-full" src="/images/inlogo.png" alt="logo" />
        </div>
        <div className="flex mt-11 flex-col px-3">
          <div className="flex items-center px-3 py-2 mt-2 hover:bg-pink-500
                cursor-pointer bg-stone-900 text-md rounded-xl duration-200">
            <BiHome className='text-lg' />
            <p className='ml-4'>Home</p>
          </div>
          <div className="flex items-center px-3 py-2 mt-2 hover:bg-pink-500
                cursor-pointer bg-stone-900 text-md rounded-xl duration-200">
            <BiStore className='text-lg' />
            <p className='ml-4'>Store</p>
          </div>
          <div className="flex items-center px-3 py-2 mt-2 hover:bg-pink-500
                cursor-pointer bg-stone-900 text-md rounded-xl duration-200">
            <BiLibrary className='text-lg' />
            <p className='ml-4'>Library</p>
          </div>
          <div className="flex items-center px-3 py-2 mt-2 hover:bg-pink-500
                cursor-pointer bg-stone-900 text-md rounded-xl duration-200">
            <BiJoystick className='text-lg' />
            <p className='ml-4'>My Games</p>
          </div>
          <div className="flex items-center px-3 py-2 mt-2 hover:bg-pink-500
                cursor-pointer bg-stone-900 text-md rounded-xl duration-200">
            <BiGroup className='text-lg' />
            <p className='ml-4'>Community</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
