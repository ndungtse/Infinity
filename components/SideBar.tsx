import Link from 'next/link'
import React, {useState} from 'react'
import { BiGroup, BiMenu, BiHome, BiJoystick, BiLibrary, BiStore, BiUser,  } from 'react-icons/bi'
import { FaTeamspeak, FaUsers } from 'react-icons/fa'

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
        onClick={() => setMobile(!mobile)}
        className="absolute top-3 left-1 z-[99]
       cursor-pointer text-3xl text-white xtab:hidden"
      />
      <div
        onClick={() => setMobile(false)}
        className={`absolute top-0 left-0 right-0 bottom-0 z-20 xtab:hidden ${!mobile && 'hidden'}`}
      ></div>
      <div
        className={`top-0 left-[-500px] z-[70] h-full bg-stone-800 duration-500 xtab:relative
     xtab:left-0 xtab:flex xtab:h-full ${mobile ? 'mob' : ''}
     absolute flex-col justify-between text-white xtab:relative xtab:w-[200px]`}
      >
        <div className="flex flex-col">
          <div className="ml-7 flex w-[100px] xtab:hidden">
            <img className="w-full" src="/images/inlogo.png" alt="logo" />
          </div>
          <div className="mt-11 flex flex-col px-3">
            <Link href="/">
              <div
                onClick={navHandler}
                className={`mt-2 flex cursor-pointer items-center px-3 py-2
                  hover:bg-violet-800 ${
                    active === 'home' ? 'bg-violet-700' : 'bg-stone-900'
                  }  
                  text-md rounded-xl bg-stone-900 duration-200`}
              >
                <BiHome className="text-lg" />
                <p className="ml-4">Home</p>
              </div>
            </Link>
            <Link href="/store">
              <div
                onClick={navHandler}
                className={`mt-2 flex cursor-pointer items-center px-3 py-2
                   hover:bg-violet-800 ${
                     active === 'store' ? 'bg-violet-700' : 'bg-stone-900'
                   } 
                   text-md rounded-xl duration-200`}
              >
                <BiStore className="text-lg" />
                <p className="ml-4">Store</p>
              </div>
            </Link>
            <Link href="/mygames">
              <div
                onClick={navHandler}
                className={`mt-2 flex cursor-pointer items-center px-3 py-2
                  hover:bg-violet-800  ${
                    active === 'mygames' ? 'bg-violet-700' : 'bg-stone-900'
                  } 
                  text-md rounded-xl bg-stone-900 duration-200`}
              >
                <BiJoystick className="text-lg" />
                <p className="ml-4">My Games</p>
              </div>
            </Link>
            <Link href="/providers/1">
              <div
                onClick={navHandler}
                className={`mt-2 flex cursor-pointer items-center px-3 py-2
                  hover:bg-violet-800  ${
                    active === 'providers' ? 'bg-violet-700' : 'bg-stone-900'
                  } 
                  text-md rounded-xl bg-stone-900 duration-200`}
              >
                <BiGroup className="text-lg" />
                <p className="ml-4">Providers</p>
              </div>
            </Link>
            <Link href="/providers">
              <div
                onClick={navHandler}
                className={`mt-2 flex cursor-pointer items-center px-3 py-2
                  hover:bg-violet-800  ${
                    active === 'community' ? 'bg-violet-700' : 'bg-stone-900'
                  } 
                  text-md rounded-xl bg-stone-900 duration-200`}
              >
                <FaUsers className="text-lg" />
                <p className="ml-4">Community</p>
              </div>
            </Link>
            <Link href="/profile">
              <div
                onClick={navHandler}
                className={`mt-2 flex cursor-pointer items-center px-3 py-2
                  hover:bg-violet-800  ${
                    active === 'profile' ? 'bg-violet-700' : 'bg-stone-900'
                  } 
                  text-md rounded-xl bg-stone-900 duration-200`}
              >
                <BiUser className="text-lg" />
                <p className="ml-4">Profile</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
