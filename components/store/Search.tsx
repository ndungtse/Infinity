import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/router'

const SearchForm = () => {
    const [rev, setRev] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState('')
    const router = useRouter()

    const detectChange = (e: { target: { value: string } })=>{
        if (e.target.value !== '') {
            setRev(true)
        }else{
            setRev(false)
        }
        setSearchInput(e.target.value)
    }

    const subSearch = ()=>{
      router.push(`/store/search/${searchInput}`)
    }

  return (
    <form onSubmit={subSearch}
      className={`tr sm:ml-0 mx-auto mt-4 flex w-1/2 items-center rounded-3xl bg-stone-800 px-3 py-2
            ${rev && 'flex-row-reverse'} text-sm text-white tablet:text-lg`}
    > 
      <BiSearch className="mt-1 text-sm tablet:text-2xl" />
      <input
        maxLength={70}
        onChange={detectChange}
        className="sm:w-full w-full bg-transparent px-2 text-[0.9em] outline-none tablet:text-lg"
        type="text"
        placeholder="Search Store "
      />
    </form>
  )
}

export default SearchForm
