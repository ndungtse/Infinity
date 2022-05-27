import React from 'react'

const StoreLoader = () => {
  return (
          <div
            className="flex h-[84vh] w-full flex-col overflow-auto overflow-x-hidden"
          >
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default StoreLoader

export function Card(){
    return(
           <div className="mx-auto h-[200px] relative animc mt-7 w-9/12 min-w-[280px] flex-col items-center justify-between rounded-xl bg-stone-800 tablet:flex tablet:w-full tablet:flex-row">
               <div className="absolute top-0 left-0 w-full 
             anim backdrop-blur-sm items-center">
                

            </div>
           </div>
    )
}
