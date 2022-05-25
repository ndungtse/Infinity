import Axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'

const Game: NextPage = () => {
  const [gameDetails, setGameDet] = useState<any>(undefined)

  const router: any = useRouter()
  const { game }: any = router.query

  console.log(gameDetails);
  console.log(game);
  
  
  const getGame = async()=>{
    if (game!==undefined) {
    const res = await Axios.get(`https://api.rawg.io/api/games/${game}?key=a5c36a8abe0c4ddb9489dc567b3cf68d`)
    setGameDet(res.data)
  }
  }
  
  useEffect(()=>{
    getGame()
  },[game])

  return (
    <>
    {gameDetails!==undefined&&(
    <div className="flex text-white w-full flex-col overflow-hidden h-screen bg-stone-800 py-2">
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active='store' />
        <div className="flex h-full w-full overflow-auto p-1 bg-stone-900 text-white xtab:p-6">
          <div className="flex flex-col w-full">
            <div className="flex">
              <div className="w-1/4 min-w-[250px] h-[40vh] flex">
                  <img src={gameDetails.background_image} className="min-w-full
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
              </div>
            </div>
            <div className="flex mt-4 flex-col w-full">
              <p className='font-semibold text-lg'>Game Description:</p>
              <p className=' text-md'>{gameDetails.description_raw}</p>
            </div>
            <div className="flex mt-4 flex-col w-full">
              <p className='font-semibold text-lg'>System Requirements:</p>
              {gameDetails.platforms.map((pla: any, inedx: any)=>(
              <div className="flex">
                <p className=' text-md mt-3'>{pla.platform.name}:</p>
                <div className="flex  flex-col ml-2">
                  <p className='ml-2'>{pla.requirements.minimum}</p>
                  <p className='ml-2 mt-4'>{pla.requirements.recommended}</p>
                </div>
              </div>
              ))}
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