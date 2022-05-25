import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import allGames from '../contexts/allGames'
import { useEffect, useState } from 'react'
// import { GameProvider } from '../contexts/gameContext'

function MyApp({ Component, pageProps, }: AppProps) {
  const [isLoading, SetIsLoading] = useState(true)

  const delay = ()=>{
    setTimeout(()=>{
      SetIsLoading(false)
    }, 3000)
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
