import React from 'react'

const CardLoader = () => {
  return (
    <div  className="mx-auto mt-4  grid w-[230px] grid-cols-[50%] gap-4 px-2 
        five:grid-cols-2 five:w-full tablet:w-full  tablet:grid-cols-3 desktop:grid-cols-4"
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
  )
}

export default CardLoader

export function Card(){
    return(
        <div className='rounded-xl animc bg-stone-900 mx-auto h-[250px] min-w-[200px] overflow-hidden relative flex flex-col'>
            <div className="absolute top-0 left-0 w-full 
             anim backdrop-blur-sm items-center">
                

            </div>
        </div>
    )
}