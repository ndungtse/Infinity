import { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'

const MyGames: NextPage = () => {
    const [isLinear, setLinear] = useState<boolean>(false)
    const [myGames, setMyGames] = useState<any>(undefined)

    const getSavedGames = ()=>{
      const loc: any =  localStorage.getItem('games')
      const local = JSON.parse(loc)
      if (local) {
          setMyGames(local)
          console.log(local);
          
      }
    }
    let downName
//   if (myGames !== undefined) {
//     const new0 = game.name.replace('(','')
//     const new1 = new0.replace(')','')
//     downName = new1.split(' ').join('+')
//     console.log(downName);
    
//   }

    useEffect(()=>{
        getSavedGames()
    },[])

  return (
      <>
      {myGames !== undefined &&(
    <div className="flex text-white w-full flex-col overflow-hidden h-screen bg-stone-800 ">
       <Navbar />
       <div className="flex h-full w-full">
          <SideBar active='mygames' setLinear={setLinear} />
          <div className="flex h-[90vh] w-full overflow-auto p-1 bg-stone-900 text-white xtab:p-6">
            <div className="flex flex-col w-full">
                <h2 className="text-xl font-semibold">Your Saved Games</h2>
                
                {myGames.length !==0?(myGames.map((game: any, index:number)=>(
                    <MyGame game={game} key={index} myGames={myGames}/>
                ))):(
                    <p className="text-center">No Saved Games Found</p>
                )}
            </div>
          </div>
       </div> 
    </div>
    )}
    </>
  )
}

export default MyGames

function MyGame({game, myGames}:any){

    let downName
      if (myGames !== undefined) {
        const new0 = game.name.replace('(','')
        const new1 = new0.replace(')','')
        downName = new1.split(' ').join('+')
        console.log(downName);
        
      }

    return(
        <div className="tablet:flex flex-col mt-7 items-center tablet:flex-row mx-auto justify-between w-1/2 min-w-[250px] tablet:w-full rounded-xl bg-stone-800">
                    <div className="flex  p-1 rounded-2xl tablet:w-1/3  aspect-video overflow-auto">
                        <img
                            className='min-w-full min-h-full object-cover'
                         src={game.background_image} alt="bg_image" />
                    </div>
                    <div className="flex flex-col">
                        <p className='text-lg font-medium'>Name: {game.name}</p>
                        <p className='text-lg font-medium'>Publisher: {game.publishers[0].name}</p>
                        <p className='text-lg font-medium'>Released: {game.released}</p>
                    </div>
                    <div className="flex flex-col text-sm items-start py-2 pr-3">
                        <Link href={`/game/${game.id}`}>
                            <div className='flex cursor-pointer text-sm px-3 py-2 bg-stone-900 rounded-md
                            hover:bg-stone-700 duration-200 items-center'>
                            More details
                            </div>
                        </Link>
                        <a className='flex mt-2 text-sm px-3 py-2 bg-stone-900 rounded-md
                        hover:bg-stone-700 duration-200 items-center' rel="noreferrer" href={`https://steamunlocked.net/?s=${downName}`} target='_blank'>
                         SteamUnlocked<BiDownload className='text-xl ml-2' /></a>
                        <a className='flex mt-2 text-sm px-3 py-2 bg-stone-900 rounded-md
                        hover:bg-stone-700 duration-200 items-center' rel="noreferrer"
                         href={`https://gamingbeasts.com/?s=${downName}`} target='_blank'>
                        GamingBeasts<BiDownload className='text-xl ml-2' /></a>
                     </div>
                </div>
    )
}