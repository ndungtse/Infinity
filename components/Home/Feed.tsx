import React from 'react'

const Feed = () => {
  return (
    <div className='xtab:w-[300px] px-2 xtab:flex hidden xtab:flex-col xtab:h-full'>
        <div className="flex flex-col h-[84vh] p-2 w-full rounded-xl bg-stone-800">
            <p className="text-md font-semibold w-full text-sky-400">Weekly Chart</p>
            <div className="flex flex-col w-full overflow-auto">
            <div className="flex bg-st w-full items-center justify-between">
                <p className='mt-2'>Game</p>
                <p>rating/10</p>
            </div>
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
            </div>
        </div>
    </div>
  )
}

export default Feed

function Row(){
    return(
        <div className="flex w-full mt-3 pr-4 items-center justify-between">
            <p>1. ELDEN RING</p>
            <p className='text-green-500'>9.5</p>
        </div>
    )
}