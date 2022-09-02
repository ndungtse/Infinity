 /* eslint-disable */ 
import axios from 'axios'
import Axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BiDownload, BiJoystickAlt } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import LinearIndeterminate from '../../components/Loaders/LinearLoad'
import LinearLoader from '../../components/Loaders/LinearProgress'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import { compare } from '../../contexts/utilities'
// import Video from '../../components/video'

const Game: NextPage = () => {
  const [gameDetails, setGameDet] = useState<any>(undefined)
  const [gameTrailers, setGameTrailers] = useState<any>(undefined)
  const [isLinear, setLinear] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const [indexImg, setIndexImg] = useState<number>(0)
  const [ren, setRen] = useState<boolean>(true)
  const [extra, setExtra] = useState<any>([]);
  const [localGames, setLocalGames]= useState([])
  const [added, setAdded] = useState<boolean>(false)

  const router: any = useRouter()
  const { game }: any = router.query

  let rating: number = 0
  if (gameDetails!==undefined) {
     rating = Math.round(gameDetails.rating) 
  }

  const getSavedGames = () => {
  if (gameDetails!==undefined) {
    
    const storage: any = localStorage.getItem('games')
    const local = JSON.parse(storage)
    
    if (local) {
      setLocalGames(local)
        const bool:any = compare(game, local)
        setAdded(bool)
      }
    }

  }
  const saveGame = () => {
     const newGames:any = [...localGames, gameDetails];
     localStorage.setItem('games', JSON.stringify(newGames))
     setLocalGames(newGames)
     setAdded(true)
  }

  const removeGame =()=>{
    const newGames = localGames.filter((g:any)=> g.id !== Number(game))
    setLocalGames(newGames)
    localStorage.setItem('games', JSON.stringify(newGames))
    
    setAdded(false)
  }

  useEffect(()=>{
    getSavedGames();
  },[gameDetails])

  const nextTrailer = (act: string)=>{
    setRen(false)
    if (act==='next') {
      if(index < gameTrailers.length -1){
        setIndex(index+1)
      }
    }else{
      if(index > 0){
        setIndex(index-1)
      }
    }
    setTimeout(()=>{
      setRen(true)
    }, 1000)
    // setRen(true)
  }

  const nextImage = (act: string)=>{
    setRen(false)
    if (act==='next') {
      if(indexImg < extra.length -2){
        setIndexImg(indexImg+1)
      }
    }else{
      if(indexImg > 0){
        setIndexImg(indexImg-1)
      }
    }
  }
  
  
  const getGame = async()=>{
    if (game!==undefined) {
    const res = await Axios.get(`https://api.rawg.io/api/games/${game}?key=${process.env.NEXT_PUBLIC_KEY}`)
    setGameDet(res.data)
  }
  }
  const getGameTrailers = async()=>{
    if (gameDetails!==undefined) {
    const res = await Axios.get(`https://api.rawg.io/api/games/${game}/movies?key=${process.env.NEXT_PUBLIC_KEY}`)    
    setGameTrailers(res.data.results)
  }
  }
  let downName
  if (gameDetails !== undefined) {
    const new0 = gameDetails.name.replace('(','')
    const new1 = new0.replace(')','')
    downName = new1.split(' ').join('+')
    
  }

  const getExtraImages = async()=>{
    if (gameDetails !== undefined) {
    const res = await Axios.get(`https://api.rawg.io/api/games/${game}/screenshots?key=${process.env.NEXT_PUBLIC_KEY}`)
    setExtra(res.data.results)
  }
  }
  
  useEffect(()=>{
    getGame()
  },[game])

  useEffect(()=>{
    getGameTrailers();
    getExtraImages()
  },[gameDetails])

  useEffect(()=>{
    console.log('mounted');
    return () => {
      console.log('unmounted');
      setGameDet(undefined)
      setGameTrailers(undefined)
      setExtra(undefined)
    }
  },[])

  return (
    <>
    {gameDetails!==undefined&&(
    <div className="flex text-white w-full flex-col overflow-hidden h-screen bg-stone-800 ">
      {isLinear&&<LinearLoader />}
      <Navbar />
      <div className="flex h-full w-full">
        <SideBar active='store' setLinear={setLinear} />
        <div className="flex h-[90vh] w-full overflow-auto p-1 bg-stone-900 text-white xtab:p-6">
          <div className="flex flex-col w-full">
            <div className="flex flex-col ltab:flex-row w-full">
              <div className="flex overflow-hidden ltab:w-1/2 aspect-video">
                <div className=" w-full h-full flex">
                    <Image src={gameDetails.background_image} className="min-w-full
                    object-cover min-h-full" alt="image" height={1920} width={1080} />
                </div>
                <div className="hidden  three:flex w-full h-full">
                    <Image src={gameDetails.background_image_additional} className="min-w-full
                    object-cover min-h-full" alt="image"  height={1920} width={1080}/>
                </div>
              </div>
              <div className="ml-7 flex flex-col">
                <h2 className='tablet:text-2xl font-bold'>{gameDetails.name}</h2>
                {/* <p className="">developers: {gameDetails.developers[0].name}</p> */}
                <div className="flex mt-3 flex-wrap"><p className='my-2'>Developers:</p>
                  {gameDetails.developers.map((gen:any, index: any)=>(
                    <p key={index} className="ml-3 my-2 bg-stone-800">{`${gen.name}`} </p>
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
                    <a href={gameDetails.website} rel="noreferrer"
                    target='_blank' className="ml-3 my-1 bg-stone-800 px-1">{`${gameDetails.website}`} </a>
                </div>
              </div>
            </div>
            <div className="flex three:flex-row flex-col mt-5 items-center">
              <div onClick={added?removeGame:saveGame}
               className={`px-2 text-violet-500 flexx items-center
                cursor-pointer flex py-2 ${added?'bg-stone-800':'bg-stone-700'} w-[200px]`}>
                <BiJoystickAlt className=' text-2xl' />
                <p>{added?'Added to MyGames':'Add to MyGames'}</p>
              </div>
              <div className="flex items-center ml-3 flex-col">
                    <p>Star Ratings</p>
                  <div className="flex">
                    <FaStar
                     className={`${rating>=1 && 'text-orange-500'}`}/>
                    <FaStar
                     className={`${rating>=2 && 'text-orange-500'}`}/>
                    <FaStar
                     className={`${rating>=3 && 'text-orange-500'}`}/>
                    <FaStar
                     className={`${rating>=4 && 'text-orange-500'}`}/>
                    <FaStar
                     className={`${rating>=5 && 'text-orange-500'}`}/>
                  </div>
              </div>
            </div>
            {( gameTrailers!==undefined && gameTrailers.length !==0) &&(
             <div className='h-[500px] w-full'>
                <h1 className="text-center text-2xl font-semibold mt-4">Trailers</h1>
                {/* <Video video={gameTrailers[0].data[480]} /> */}
                 {ren &&(<video
                  className='w-1/2 mx-auto min-w-[250px]'
                 width="720" height="340" controls>
                  <source src={gameTrailers[index].data[480]} type="" />
                </video>)} 
                <div className={`flex ${!ren && 'mt-[275px]'} justify-center mt-4 items-center w-full`}>
                  <button 
                   onClick={()=>nextTrailer('prev')}
                  className='bg-stone-800 py-2 px-3 rounded-md hover:bg-stone-700
                    duration-200'>Previous</button>
                  <button onClick={()=>nextTrailer('next')}
                  className='bg-stone-800 py-2 px-3 rounded-md hover:bg-stone-700
                    duration-200 ml-3'>Next</button>
                </div>
              </div> )}
            <div className="flex mt-4 flex-col w-full">
              <p className='font-semibold text-lg'>Game Description:</p>
              <p className=' text-md'>{gameDetails.description_raw}</p>
            </div>
            {( gameTrailers!==undefined && extra.length !==0) &&(
              <>
                  <h1 className="text-center text-2xl font-semibold mt-4">ScreenShots</h1>
                  <div className="flex justify-between">
                    <div className="w-[49%] aspect-video overflow-hidden">
                      <img className='min-w-full min-h-full object-cover'
                      src={extra[indexImg].image} alt="sreenshot" />
                    </div>
                    <div className="w-[49%] aspect-video overflow-hidden">
                      <img className='min-w-full min-h-full object-cover'
                      src={extra[indexImg+1].image} alt="sreenshot" />
                    </div>
                  </div>
                <div className={`flex justify-center mt-4 items-center w-full`}>
                  <button 
                   onClick={()=>nextImage('prev')}
                  className='bg-stone-800 py-2 px-3 rounded-md hover:bg-stone-700
                    duration-200'>Previous</button>
                  <button onClick={()=>nextImage('next')}
                  className='bg-stone-800 py-2 px-3 rounded-md hover:bg-stone-700
                    duration-200 ml-3'>Next</button>
                </div>
              </>  
            )}
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
            <h1 className="text-2xl mt-9 font-bold text-center">Download Links</h1>
              <p className='text-center'>Try another link if one can't get you what you want</p>
            <div className="flex flex-wrap pb-4 items-center justify-center">
            <a className='flex mt-5 text-lg px-3 py-2 bg-stone-800 rounded-md
              hover:bg-stone-700 duration-200 items-center' rel="noreferrer" href={`https://steamunlocked.net/?s=${downName}`} target='_blank'>
              SteamUnlocked<BiDownload className='text-2xl ml-2' /></a>
              <a className='flex mt-5 ml-4 text-lg px-3 py-2 bg-stone-800 rounded-md
              hover:bg-stone-700 duration-200 items-center' rel="noreferrer"
               href={`https://gamingbeasts.com/?s=${downName}`} target='_blank'>
              GamingBeasts<BiDownload className='text-2xl ml-2' /></a>
              </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default Game