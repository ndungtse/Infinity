import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import allGames from '../contexts/allGames'
// import { GameProvider } from '../contexts/gameContext'

function MyApp({ Component, pageProps, }: AppProps) {
  // allGames()
  return( 
    <>
      <Head>
        <link rel="icon" href="/images/inlogo.png" />
        <title>Infinity</title>
      </Head>
      {/* <GameProvider> */}
        <Component {...pageProps} />
      {/* </GameProvider> */}
    </>
  )
}


export default MyApp
