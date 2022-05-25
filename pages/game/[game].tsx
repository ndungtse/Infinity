import Axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import Video from '../../components/video'

const Game: NextPage = () => {
  const [gameDetails, setGameDet] = useState<any>(undefined)
  const [gameTrailers, setGameTrailers] = useState<any>(undefined)

  const router: any = useRouter()
  const { game }: any = router.query

  console.log(gameDetails);
  console.log(gameTrailers);
  
  const low = 480
  
  const getGame = async()=>{
    if (game!==undefined) {
    const res = await Axios.get(`https://api.rawg.io/api/games/${game}?key=a5c36a8abe0c4ddb9489dc567b3cf68d`)
    setGameDet(res.data)
  }
  }
  const getGameTrailers = async()=>{
    if (gameDetails!==undefined) {
    const res = await Axios.get(`https://api.rawg.io/api/games/${game}/movies?key=a5c36a8abe0c4ddb9489dc567b3cf68d`)
    setGameTrailers(res.data.results)
  }
  }
  let downName
  if (gameDetails !== undefined) {
    downName = gameDetails.name.split(' ').join('+')
    console.log(downName);
    
  }
  
  useEffect(()=>{
    getGame()
  },[game])

  useEffect(()=>{
    getGameTrailers()
  },[gameDetails])

  return (
    <>
    {gameDetails!==undefined&&(
    <div className="flex text-white w-full flex-col overflow-hidden h-screen bg-stone-800 py-2">
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active='store' />
        <div className="flex h-[90vh] w-full overflow-auto p-1 bg-stone-900 text-white xtab:p-6">
          <div className="flex flex-col w-full">
            <div className="flex">
              <div className="w-1/4 min-w-[250px] h-[40vh] flex">
                  <img src={gameDetails.background_image} className="min-w-full
                  object-cover min-h-full" alt="image" />
              </div>
              <div className="w-1/4 min-w-[250px] h-[40vh] flex">
                  <img src={gameDetails.background_image_additional} className="min-w-full
                  object-cover min-h-full" alt="image" />
              </div>
              <div className="ml-7 flex flex-col">
                <h2 className='tablet:text-2xl font-bold'>{gameDetails.name}</h2>
                {/* <p className="">developers: {gameDetails.developers[0].name}</p> */}
                <div className="flex mt-3"><p>Developers:</p>
                  {gameDetails.developers.map((gen:any, index: any)=>(
                    <p key={index} className="ml-3 bg-stone-800">{`${gen.name}`} </p>
                  ))}
                </div>
                <div className="flex mt-3"><p>Genres:</p>
                  {gameDetails.genres.map((gen:any, index: any)=>(
                    <p key={index} className="ml-3 bg-stone-800">{`${gen.name}`} </p>
                  ))}
                </div>
                <div className="flex mt-3"><p>Release Date:</p>
                  <p className='ml-3'>{gameDetails.released}</p>
                </div>
                <div className="flex mt-3"><p>Ratings:</p>
                  <p className='ml-3'>{gameDetails.rating}/5</p>
                </div>
                <div className="flex mt-3 items-center flex-wrap"><p>Platforms:</p>
                  {gameDetails.platforms.map((pla:any, index: any)=>(
                    <p key={index} className="ml-3 my-1 bg-stone-800 px-1">{`${pla.platform.name}`} </p>
                  ))}
                </div>
                <div className="flex mt-3 pb-4 items-center flex-wrap"><p>Website:</p>
                    <a href={gameDetails.website} rel='no-refferer'
                    target='_blank' className="ml-3 my-1 bg-stone-800 px-1">{`${gameDetails.website}`} </a>
                </div>
              </div>
            </div>
            {( gameTrailers!==undefined && gameTrailers.length !==0) &&(
             <>
            <h1 className="text-center text-2xl font-semibold mt-4">Trailers</h1>
            <Video video={gameTrailers[0].data[480]} />
            </> )}
            <div className="flex mt-4 flex-col w-full">
              <p className='font-semibold text-lg'>Game Description:</p>
              <p className=' text-md'>{gameDetails.description_raw}</p>
            </div>
            <div className="flex mt-4 flex-col w-full">
              <p className='font-semibold text-lg'>System Requirements:</p>
              {gameDetails.platforms.map((pla: any, index: any)=>(
              <div key={index} className="flex">
                <p className=' text-md mt-3'>{pla.platform.name}:</p>
                <div className="flex  flex-col ml-2">
                  <p className='ml-2'>{pla.requirements.minimum}</p>
                  <p className='ml-2 mt-4'>{pla.requirements.recommended}</p>
                </div>
              </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
            <a className='flex text-lg px-3 py-2 bg-stone-800 rounded-md
              hover:bg-stone-700 duration-200 items-center' href={`https://gamingbeasts.com/?s=${downName}`} target='_blank'>
              Download<BiDownload className='text-2xl ml-2' /></a>
              </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  )
}

// export const getStaticPaths = async () => {
//   const res = await fetch('https://api.rawg.io/api/games?key=a5c36a8abe0c4ddb9489dc567b3cf68d&3498');
//   const data = await res.json();
//   console.log(data);
  
//   const paths = data.results.map((game: { id: { toString: () => any } }) => {
//     return {
//       params: { game: game.id.toString() }
//     }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps = async(context)=>{
//   const game = context.params.id

//   const res = await Axios.get(`https://api.rawg.io/api/games?key=a5c36a8abe0c4ddb9489dc567b3cf68d&3498&${game}`)

//   return{
//     props: {
//       gameDetails: res.data
//     }
//   }
// }

export default Game