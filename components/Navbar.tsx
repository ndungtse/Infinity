import React, { useState } from 'react'
import { BiBell, BiCog, BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/router'

type Props = {
  setLinear: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({setLinear}: Props) => {
  const [rev, setRev] = useState<boolean>(false)
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()

  const detectChange = (e: any)=>{
      if (e.target.value !== '') {
          setRev(true)
          setSearchInput(e.target.value)
      }else{
          setRev(false)
      }
  }

  const subSearch = (e: any)=>{
    e.preventDefault()
    if (searchInput!=='') {
      router.push(`/store/search/${searchInput}`)
    }
  }


  return (
    <div className='w-full h-[60px] flex items-center justify-between p-3 sm:px-11'>
        <div className="flex ">
            <div className="xtab:ml-7 xtab:flex hidden xtab:w-[180px] ">
              <img className="w-[100px] cursor-pointer" src="/images/inlogo.png" alt="logo" />
            </div>
        </div>
        <form onSubmit={subSearch}
         className="flex  xtab:w-full">
            <div className={`flex tr sm:ml-0 ml- bg-stone-900 text-sm tablet:text-lg text-white
              ${rev && 'flex-row-reverse'}  rounded-xl items-center px-3 py-1`}>
                <label htmlFor="s1" className='cursor-pointer'>
                <BiSearch className='text-sm mt-1 tablet:text-xl' />
                </label>
                <input
                onChange={detectChange}
                className='sm:w-full text-[0.9em] w-[100px] tablet:w-[300px] px-2 outline-none bg-transparent'
                 type="text" placeholder='Search ' />
            </div>
            <input type="submit" id='s1' className='hidden' />
        </form>
        <div className="flex items-center">
            <BiBell className='p-2 cursor-pointer text-4xl rounded-full  bg-stone-900 text-gray-700'/>
            <BiCog className='p-2 cursor-pointer text-4xl ml-2  rounded-full bg-stone-900 text-gray-700'/>
        </div>
    </div>
  )
}

export default Navbar