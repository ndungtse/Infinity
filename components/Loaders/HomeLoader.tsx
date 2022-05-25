import React from 'react'
import { Card } from './CardLoader'

const HomeLoader = () => {
  return (
    <div className="flex h-screen w-full flex-col bg-stone-900 py-2">
      <div className="sm:px-11 flex h-[60px] w-full items-center justify-between p-3">
          <div className="flex">
        <div className="flex h-[50px]">
          <div className="hidden h-full  animc relative xtab:ml- xtab:flex xtab:w-[120px] ">
          <div
            className="anim absolute top-0 left-0 
             w-full items-center backdrop-blur-sm"
            ></div>
          </div>
        </div>
        <div className="flex h-[30px] my-auto">
          <div className=" h-full animc relative xtab:ml-7 xtab:flex xtab:w-[260px] ">
          <div
            className="anim absolute top-0 left-0 
             w-full items-center backdrop-blur-sm"
            ></div>
          </div>
        </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full animc relative p-3">
          <div
        className="anim absolute top-0 left-0 
             w-full items-center backdrop-blur-sm"
             ></div>
          </div>
          <div className="ml-3 animc relative rounded-full p-3">
            <div
            className="anim absolute top-0 left-0 
             w-full items-center backdrop-blur-sm"
            ></div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full">
        <div className="absolute hidden h-full w-[180px] flex-col justify-between text-white xtab:relative xtab:flex">
          <div className="flex flex-col">
            <div className="ml-7 flex h-[70px] w-[100px] xtab:hidden"></div>
            <div className="mt-11 flex flex-col px-3">
              <Side />
              <Side />
              <Side />
              <Side />
              <Side />
            </div>
          </div>
        </div>
        <div className="flex w-full">
            <div className="flex flex-col overflow-x-hidden mt-9 w-full h-[84vh] overflow-auto">
                    <div className=" animc relative flex h-[40vh] w-full rounded-xl">
                         <div className="absolute top-0 left-0 w-full 
                         anim backdrop-blur-sm items-center">
                        </div>
                   </div>
                <div className="mx-auto mt-4  grid w-[230px] grid-cols-[50%] gap-4 px-2 
                five:w-full five:grid-cols-2 tablet:w-full  tablet:grid-cols-3 desktop:grid-cols-4"
                >
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
            </div>
            <div className='xtab:w-[300px] px-2 xtab:flex hidden xtab:flex-col xtab:h-full'>
                <div className="flex animc relative flex-col my-auto h-[80vh] p-2 w-full rounded-xl bg-stone-800">
                    <div
                     className="anim absolute top-0 left-0 
                     w-full items-center backdrop-blur-sm"
                    ></div>
                </div>
            </div>    
        </div>
      </div>
    </div>
  )
}

export default HomeLoader

function Side() {
  return (
    <div
      className={`animc relative text-md mt-2 flex h-[30px] w-full items-center rounded-xl bg-stone-900
        px-3 py-2 duration-200 hover:bg-stone-700`}
    >
      <div
        className="anim absolute top-0 left-0 
             w-full items-center backdrop-blur-sm"
      ></div>
    </div>
  )
}
