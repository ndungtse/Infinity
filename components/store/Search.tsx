import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/router'

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchForm = ({setLoading}: Props) => {
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
      setLoading(true)
      if (searchInput!=='') {
        router.push(`/store/search/${searchInput}`)
      }
    }

  return (
    <form onSubmit={subSearch}
      className={`tr sm:ml-0 mx-auto mt-4 flex w-1/2 items-center rounded-3xl bg-stone-800 px-3 py-2
            ${rev && 'flex-row-reverse'} text-sm text-white tablet:text-lg`}
    > <label htmlFor="submit" className='cursor-pointer'>
      <BiSearch className="mt-1 text-sm tablet:text-2xl" />
      </label>
      <input
        maxLength={70}
        onChange={detectChange}
        className="sm:w-full w-full bg-transparent px-2 text-[0.9em] outline-none tablet:text-lg"
        type="text"
        placeholder="Search Store "
      />
      <input type="submit" id='submit' className='hidden' />
    </form>
  )
}

export default SearchForm
