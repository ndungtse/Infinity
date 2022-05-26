import Link from 'next/link'
import React, {useState} from 'react'
import { BiGroup, BiMenu, BiHome, BiJoystick, BiLibrary, BiStore,  } from 'react-icons/bi'

type Props = {
  active: string,
  setLinear: React.Dispatch<React.SetStateAction<boolean>>
}


function SideBar({active, setLinear}: Props) {
  const [mobile, setMobile]= useState<boolean>(false)
  const [test, settest]= useState<boolean>(false)
  
  const navHandler = ()=>{
    setMobile(false)
    setLinear(true)
  }
  

  return (
    <>
    <BiMenu
      onClick={()=>setMobile(!mobile)}
     className='text-4xl z-20 cursor-pointer
       absolute top-3 left-1 xtab:hidden' />
    <div 
    className={`xtab:flex top-0 h-full xtab:h-full xtab:relative duration-500 z-10
     bg-stone-800 left-[-500px] xtab:left-0 ${mobile?'mob':''}
     absolute xtab:relative text-white xtab:w-[200px] flex-col justify-between`}>
      <div className="flex flex-col">
        <div className="ml-7 xtab:hidden flex w-[100px]">
          <img className="w-full" src="/images/inlogo.png" alt="logo" />
        </div>
        <div className="flex mt-11 flex-col px-3">
          <Link href="/">
            <div onClick={navHandler} 
            className={`flex items-center px-3 py-2 mt-2 hover:bg-stone-700
                  cursor-pointer ${active==='home'? 'bg-stone-700': 'bg-stone-900'}  
                  bg-stone-900 text-md rounded-xl duration-200`}>
              <BiHome className='text-lg' />
              <p className='ml-4'>Home</p>
            </div>
          </Link>
          <Link href="/store">
            <div onClick={navHandler} 
            className={`flex items-center px-3 py-2 mt-2 hover:bg-stone-700
                   cursor-pointer ${active==='store'? 'bg-stone-700': 'bg-stone-900'} 
                   text-md rounded-xl duration-200`}>
              <BiStore className='text-lg' />
              <p className='ml-4'>Store</p>
            </div>
          </Link>
          <Link href="/store">
            <div onClick={navHandler} 
            className={`flex items-center px-3 py-2 mt-2 hover:bg-stone-700
                  cursor-pointer  ${active==='mygames'? 'bg-stone-700': 'bg-stone-900'} 
                  bg-stone-900 text-md rounded-xl duration-200`}>
              <BiJoystick className='text-lg' />
              <p className='ml-4'>My Games</p>
            </div>
          </Link>
          <Link href="/store">
            <div onClick={navHandler} 
            className={`flex items-center px-3 py-2 mt-2 hover:bg-stone-700
                  cursor-pointer  ${active==='community'? 'bg-stone-700': 'bg-stone-900'} 
                  bg-stone-900 text-md rounded-xl duration-200`}>
              <BiGroup className='text-lg' />
              <p className='ml-4'>Providers</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default SideBar
