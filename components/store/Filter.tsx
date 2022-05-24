import React from 'react'

type Props = {
    filterGames: (genre: string) => void
}

const Filter = ({filterGames}: Props) => {
  return (
    <div className="mx-auto mt-6 flex">
              <button
                className="flex items-center justify-center rounded-xl border-2
            border-stone-800 bg-stone-800 px-3 py-2 duration-200 hover:bg-stone-800"
              >
                All
              </button>
              <button
              onClick={()=> filterGames('Action')}
                className="ml-4 flex items-center justify-center rounded-xl
            border-2 border-stone-800 px-3 py-2 duration-200 hover:bg-stone-800"
              >
                Shooter
              </button>
              <button
                onClick={()=> filterGames('Racing')}
                className="ml-4 flex items-center justify-center rounded-xl
            border-2 border-stone-800 px-3 py-2 duration-200 hover:bg-stone-800"
              >
                Racing
              </button>
              <button
              onClick={()=> filterGames('Sports')}
                className="ml-4 flex items-center justify-center rounded-xl
            border-2 border-stone-800 px-3 py-2 duration-200 hover:bg-stone-800"
              >
                Sports
              </button>
              <button
                onClick={()=> filterGames('Strategy')}
                className="ml-4 flex items-center justify-center rounded-xl
            border-2 border-stone-800 px-3 py-2 duration-200 hover:bg-stone-800"
              >
                Strategy
              </button>
            </div>
  )
}

export default Filter