import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import allGames from '../contexts/allGames'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import { GameProvider } from '../contexts/gameContext'

function MyApp({ Component, pageProps, }: AppProps) {
  const [isLoading, SetIsLoading] = useState(true)

  const delay = async()=>{
    await axios.get('https://api.rawg.io/api/games?key=a5c36a8abe0c4ddb9489dc567b3cf68d')
      SetIsLoading(false)
  }
  
  useEffect(()=>{
    delay()
  },[])
  

  return( 
    <>
      <Head>
        <link rel="icon" href="/images/inlogo.png" />
        <title>Infinity</title>
      </Head>
      {/* <GameProvider> */}
        <Component {...pageProps} isLoading={isLoading}
         setIsLoading={SetIsLoading} />
      {/* </GameProvider> */}
    </>
  )
}


export default MyApp
