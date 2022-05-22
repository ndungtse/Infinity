import React, { useState } from 'react'
import { BiBell, BiCog, BiMenu, BiSearch } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] flex items-center justify-between p-3 sm:px-11'>
        <div className="flex ">
            <div className="xtab:ml-7 xtab:flex hidden xtab:w-[180px] ">
              <img className="w-[100px] cursor-pointer" src="/images/inlogo.png" alt="logo" />
            </div>
            <BiMenu className='text-4xl xtab:hidden' />
        </div>
        <div className="flex  xtab:w-full">
            <div className="flex tr sm:ml-0 ml- bg-stone-900 text-sm tablet:text-lg text-white rounded-xl items-center px-3 py-1">
                <BiSearch className='text-sm mt-1 tablet:text-xl' />
                <input
                className='sm:w-full text-[0.9em] w-[100px] tablet:w-[300px] px-2 outline-none bg-transparent'
                 type="text" placeholder='Search Game ' />
            </div>
        </div>
        <div className="flex items-center">
            <BiBell className='p-2 cursor-pointer text-4xl rounded-full  bg-stone-900 text-gray-700'/>
            <BiCog className='p-2 cursor-pointer text-4xl ml-2  rounded-full bg-stone-900 text-gray-700'/>
        </div>
    </div>
  )
}

export default Navbar