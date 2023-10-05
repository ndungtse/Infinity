import '../styles/globals.css'
import '../styles/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AppProvider from '../contexts/AppContext'
import PostProvider from '../contexts/PostContext'
import { UserProvider } from '../contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, SetIsLoading] = useState(true)

  const delay = async () => {
    await axios.get(
      'https://api.rawg.io/api/games?key=a5c36a8abe0c4ddb9489dc567b3cf68d'
    )
    SetIsLoading(false)
  }

  useEffect(() => {
    delay()
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" href="/images/inlogo.png" type="image/x-icon" />
        <title>Infinity Gaming - Play Over 600,000 Games</title>
        <meta
          name="description"
          content="Explore a vast collection of over 600,000 games and connect with other gamers on Infinity - the ultimate gaming destination."
        />
        <meta
          name="keywords"
          content="gaming, games, gamers, game collection, online gaming, multiplayer, gaming community"
        />
        <meta name="author" content="Ishimwe Ndungutse Charles" />
        <meta
          property="og:title"
          content="Infinity Gaming - Play Over 600,000 Games"
        />
        <meta
          property="og:description"
          content="Join the ultimate gaming community! Discover and play over 600,000 games on Infinity. Connect with other gamers and have fun."
        />
        <meta
          property="og:image"
          content="/images/battlefield.jpg"
        />
        <meta property="og:url" content="https://infinity1.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Infinity Gaming - Play Over 600,000 Games"
        />
        <meta
          name="twitter:description"
          content="Join the ultimate gaming community! Discover and play over 600,000 games on Infinity. Connect with other gamers and have fun."
        />
        <meta
          name="twitter:image"
          content="/images/battlefield.jpg"
        />
      </Head>
      <AppProvider>
        <PostProvider>
          <UserProvider>
            <Component
              {...pageProps}
              isLoading={isLoading}
              setIsLoading={SetIsLoading}
            />
          </UserProvider>
        </PostProvider>
      </AppProvider>
    </>
  )
}

export default MyApp
